const express = require('express')
const router = express.Router()

const User = require('../models')

router.get('/', (req, res) => {
  const {
    email
  } = req.query
  User.find({
    email: email,
  })
})