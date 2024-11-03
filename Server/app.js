require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/userRouter')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(bodyParser.json())

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server is working at PORT ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}
start()
