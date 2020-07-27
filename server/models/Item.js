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
  gender: {
    type: String,
    required: true,
  },
  sale: {
    type: Boolean,
    default: false,
  },
  kids: {
    type: Boolean,
    default: false,
  }
})

module.exports = mongoose.model('item', ItemSchema)