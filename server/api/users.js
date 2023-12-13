require('dotenv').config()
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const {
  JWT_SECRET,
} = process.env

const User = require('../models/User')



// @route POST api/users
// @desc Register new user
// @access Public
router.post('/', (req, res) => {
  const {
    name,
    email,
    password,
  } = req.body

  if(!name || !email || !password) {
    res.status(400).json({
      msg: 'Please enter all fields',
    })
  }

  User.findOne({
    email,
  })
    .then(user => {
      if(user) return res.status(400).json({
        msg: 'User already exists',
      })
      
      const newUser = new User({
        name,
        email,
        password,
      })

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err
          newUser.password = hash
          newUser.save()
            .then(user => {
              jwt.sign(
                {
                  id: user._id,
                },
                  JWT_SECRET,
                {
                  expiresIn: 3600,
                },
                (err, token) => {
                  if(err) return res.status(500).statusMessage(err);
                  return res.status(200).json({
                    token,
                    user: {
                      id: user._id,
                      name: user.name,
                      email: user.email,
                    }
                  })
                }
              )              
            })
        })
      })
    })
})

module.exports = router