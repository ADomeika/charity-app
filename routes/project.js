const express = require('express')

const Project = require('../models/project')
const User = require('../models/user')
const auth = require('../middleware/auth')

const router = new express.Router()

// Create a project
router.post('', auth, async (req, res) => {
  const fields = Object.keys(req.body)
  const requiredFields = ['name', 'description', 'imgSrc']
  const isValidOperation = fields.every((field) => requiredFields.includes(field))
  if (!isValidOperation) return res.status(400).send({ error: 'Missing or invalid fields!' })

  const project = new Project({
    ...req.body,
    createdBy: req.user.id
  })
  try {
    await project.save()
    res.status(201).json(project)
  } catch (error) {
    res.status(500).json({ error: 'Server Error' })
  }
})

// Edit a project
router.patch('/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'description', 'imgSrc']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  if (!isValidOperation) return res.status(400).send({ error: 'Invalid updates!' })
  try {
    const project = await Project.findById(req.params.id)
    if (!project) return res.status(404).json({ error: 'Can not find project' })

    const user = await User.findById(req.user.id)
    if (user.role !== 'superadmin' && user.role !== 'developer') {
      const author = project.createdBy
      if (author.toString() !== user._id.toString()) {
        return res.status(403).json({ error: 'Forbidden' })
      }
    }
    updates.forEach((update) => project[update] = req.body[update])
    await project.save()
    res.json(project)
  } catch (error) {
    if (error.kind === 'ObjectId') return res.status(404).json({ error: 'Can not find project' })
    res.status(500).json({ error: 'Server Error' })
  }
})

// Delete a project
router.delete('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
    if (!project) return res.status(404).json({ error: 'Can not find project' })
    
    const user = await User.findById(req.user.id)
    if (user.role !== 'superadmin' && user.role !== 'developer') {
      const author = project.createdBy
      if (author.toString() !== user._id.toString()) {
        return res.status(403).json({ error: 'Forbidden' })
      }
    }
    await project.remove()
    res.json(project)
  } catch (error) {
    if (error.kind === 'ObjectId') return res.status(404).json({ error: 'Can not find project' })
    res.status(500).json({ error: 'Server Error' })
  }
})

// Get all projects
router.get('', async (req, res) => {
  try {
    const projects = await Project.find().populate('createdBy', 'name')
    res.json(projects)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Server Error' })
  }
})

// Get a project
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate('createdBy', 'name')
    if (!project) return res.status(404).json({ error: 'Can not find project' })
    res.json(project)
  } catch (error) {
    if (error.kind === 'ObjectId') return res.status(404).json({ error: 'Can not find project' })
    res.status(500).json({ error: 'Server Error' })
  }
})

module.exports = router
