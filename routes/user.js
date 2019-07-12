const express = require('express')
const bcrypt = require('bcryptjs')

const User = require('../models/user')
const auth = require('../middleware/auth')
const superadmin = require('../middleware/superadmin')

const router = new express.Router()

// Create a user
router.post('', [auth, superadmin], async (req, res) => {
  const fields = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'role']
  const isValidOperation = fields.every((field) => allowedUpdates.includes(field))
  if (!isValidOperation) return res.status(400).send({ error: 'Invalid or missing fields!' })

  const { name, email, password, role } = req.body
  try {
    let user = await User.findOne({ email })
    if (user) return res.status(400).json({ error: 'User already exists' })

    user = new User({ name, email, password, role })
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)

    await user.save()
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ error: 'Server Error' })
  }
})

// Get all users
router.get('', async (req, res) => {
  try {
    const users = await User.find().select('-password')
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: 'Server Error' })
  }
})

// Get a user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password')
    if (!user) return res.status(404).json({ error: 'Can not find user' })
    res.json(user)
  } catch (error) {
    if (error.kind === 'ObjectId') return res.status(404).json({ error: 'Can not find user' })
    res.status(500).json({ error: 'Server Error' })
  }
})

module.exports = router
