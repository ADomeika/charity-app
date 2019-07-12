const execFile = require('child_process').execFile
const express = require('express')

const router = new express.Router()

const deploy = (res) => {
  execFile('/var/www/charity.domeika.dev/hooks/update.sh', { maxBuffer: 1024 * 1024 }, (error) => {
    if (error) {
      console.error('Failed to execute file')
      return res.status(500).send()
    }
    res.send()
  })
}

// Deploy after pushing files
router.post(process.env.DEPLOY_ROUTE, (req, res) => {
  const sender = req.body.sender
  const branch = req.body.ref
  if (!branch) return res.status(500).send()
  if (branch.includes('master') && sender.login === process.env.GIT_USERNAME) {
    deploy(res)
  } else {
    res.status(500).send()
  }
})

module.exports = router
