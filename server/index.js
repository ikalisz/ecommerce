require('dotenv').config()
const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

// Bodyparser Middleware
app.use(bodyParser.json())

const {
  SERVER_PORT,
  SESSION_SECRET,
} = process.env

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}))


app.listen(SERVER_PORT, () => {
  console.log(`Server is up and running!`)
})