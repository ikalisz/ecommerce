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
  section: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    default: 'https://cdn.sstatic.net/Img/unified/sprites.svg?v=e5e58ae7df45',
  }
})

module.exports = mongoose.model('item', ItemSchema)