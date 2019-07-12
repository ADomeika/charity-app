const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imgSrc: {
    type: String,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('project', projectSchema)
