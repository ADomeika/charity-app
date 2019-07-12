const User = require('../models/user')

module.exports = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id)
    if (!user) return res.status(404).json({ error: 'User not found' })
    if (user.role !== 'superadmin' && user.role !== 'developer') {
      return res.status(403).json({ error: 'Forbidden' })
    }
    next()
  } catch (error) {
    res.status(500).json({ error: 'Server Error' })
  }
}
