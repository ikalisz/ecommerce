const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  sale: {
    type: Boolean,
    default: false,
  },
  section: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('item', ItemSchema)