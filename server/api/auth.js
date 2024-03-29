require('dotenv').config()
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')

const {
  JWT_SECRET,
} = process.env

const User = require('../models/User')



// @route POST api/auth
// @desc Login a user
// @access Public
router.post('/', (req, res) => {
  const {
    email,
    password,
  } = req.body
  
  // Simple Validation
  if(!email || !password) {
    res.status(400).json({
      msg: 'Please enter all fields',
    })
  }

  // Check for existing user
  User.findOne({
    email,
  })
  .then(user => {
    if(!user) return res.status(404).json({
      msg: 'User does not exists',
    })
    // Validate password
    bcrypt.compare(password, user.password)
    .then(isMatch => {
      if(!isMatch) return res.status(401).json({
        msg: 'Invalid credentials',
      })

      jwt.sign(
        {
          id: user._id,
        },
        JWT_SECRET,
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if(err) throw err
          res.json({
            token,
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
            },
          })
        }
      )
    })
  })
})

// @route GET api/auth/user
// @desc Get user data
// @access Private

router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user))
})

module.exports = router