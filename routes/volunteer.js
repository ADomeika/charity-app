const express = require('express')
const Volunteer = require('../models/volunteer')
const auth = require('../middleware/auth')

const router = new express.Router()

// Create a volunteer
router.post('', auth, async (req, res) => {
  const fields = Object.keys(req.body)
  const requiredFields = ['name', 'description', 'imgSrc']
  const isValidOperation = fields.every((field) => requiredFields.includes(field))
  if (!isValidOperation) return res.status(400).send({ error: 'Missing or invalid fields!' })

  try {
    const volunteer = new Volunteer(req.body)
    await volunteer.save()
    res.status(201).json(volunteer)
  } catch (error) {
    res.status(500).json({ error: 'Server Error' })
  }
})

// Edit a volunteer
router.patch('/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'description', 'imgSrc']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  if (!isValidOperation) return res.status(400).send({ error: 'Invalid updates!' })

  try {
    const volunteer = await Volunteer.findById(req.params.id)
    if (!volunteer) return res.status(404).json({ error: 'Can not find a volunteer' })
    updates.forEach((update) => volunteer[update] = req.body[update])
    res.json(volunteer)
  } catch (error) {
    if (error.kind === 'ObjectId') return res.status(404).json({ error: 'Can not find a volunteer' })
    res.status(500).json({ error: 'Server Error' })
  }
})

// Delete a volunteer
router.delete('/:id', auth, async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id)
    if (!volunteer) return res.status(404).json({ error: 'Can not find a volunteer' })
    await volunteer.remove()
    res.json(volunteer)
  } catch (error) {
    if (error.kind === 'ObjectId') return res.status(404).json({ error: 'Can not find a volunteer' })
    res.status(500).json({ error: 'Server Error' })
  }
})

// Get all volunteers
router.get('', async (req, res) => {
  try {
    const volunteers = await Volunteer.find()
    res.json(volunteers)
  } catch (error) {
    res.status(500).json({ error: 'Server Error' })
  }
})

// Get a volunteer
router.get('/:id', async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id)
    if (!volunteer) return res.status(404).json({ error: 'Can not find a volunteer' })
    res.json(volunteer)
  } catch (error) {
    if (error.kind === 'ObjectId') return res.status(404).json({ error: 'Can not find a volunteer' })
    res.status(500).json({ error: 'Server Error' })
  }
})

module.exports = router
