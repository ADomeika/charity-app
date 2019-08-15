const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const cacheControl = require('./middleware/cacheControl')

const app = express()
const port = process.env.PORT || 5000

const corsOptions = {
  origin: process.env.ORIGIN || 'http://localhost:3000',
  optionsSuccessStatus: 200
}

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})

app.use(cors(corsOptions))
app.use(express.json({ extended: false }))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/projects', require('./routes/project'))
app.use('/api/volunteers', require('./routes/volunteer'))
app.use('/api/users', require('./routes/user'))

if (process.env.NODE_ENV === 'production') {
  app.use('/api', require('./routes/deploy'))
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => console.log(`App listening on port ${port}`))
