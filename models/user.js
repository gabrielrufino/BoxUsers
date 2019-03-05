const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  created_at: {
    type: Date,
    default: Date(),
    select: false
  },
  updated_at: {
    type: Date,
    default: Date(),
    select: false
  }
})

const User     = mongoose.model('User', userSchema)
module.exports = User
