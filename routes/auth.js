const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

const router = new express.Router()

// Login
router.post('', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) return res.status(401).json({ error: 'Invalid Credentials' })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(401).json({ error: 'Invalid Credentials' })

    const payload = { user: { id: user._id } }

    jwt.sign(payload, process.env.JWT_SECRET, (err, token) => {
      if (err) return res.status(500).json({ error: 'Server Error' })
      user.password = undefined
      user.__v = undefined
      res.json({ user, token })
    })
  } catch (error) {
    res.status(500).json({ error: 'Server Error' })
  }
})

module.exports = router
