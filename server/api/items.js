const express = require('express')
const router = express.Router()

//Item Model
const Item = require('../models/Item')

// @route GET api/items
// @desc Get ALL Items
// @access Public
router.get('/', (req, res) => {
  const {
    sort = { cost: -1 },
  } = req.query
  Item.find()
    .sort(sort)
    .then(items => res.json(items))
})

// @route POST api/items
// @desc Create an Item
// @access Public
router.post('/', (req, res) => {
  const {
    name,
    cost,
    section,
  } = req.body
  const newItem = new Item({
    name,
    cost,
    section,
  })

  newItem.save()
    .then(item => res.json(item))
})


// @route DELETE api/items/:id
// @desc Delete an Item
// @access Public
router.delete('/:id', (req, res) => {
  const {
    id,
  } = req.params
  Item.findById(id)
    .then(item => item.remove()
      .then(() => res.json({
        success: true,
      }))
    )
    .catch(err => res.status(404).json({
      success: false,
    }))
})
module.exports = router