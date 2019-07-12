const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token')
  // Check if no token
  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' })
  }
  try {
    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded.user
    next()
  } catch (error) {
    res.status(401).json({ error: 'Token is not valid' })
  }
}
