require('dotenv').config()
const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')

const items = require('./api/items')
const users = require('./api/users')
const auth = require('./api/auth')

const app = express()

// Bodyparser Middleware
app.use(express.json())

const {
  SERVER_PORT,
  SESSION_SECRET,
  MONGO_URI,
} = process.env

const db = MONGO_URI
const port = SERVER_PORT || 5000

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Connected!'))
  .catch(err => console.log(err))

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}))

// Routes
app.use('/api/items', items)
app.use('/api/users', users)
app.use('/api/auth', auth)

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}!`)
})