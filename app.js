const express = require('express')

require('dotenv').config()

const app = express()

const bodyParser = require('body-parser')

const cors = require('cors')

app.use(bodyParser.json())
require('./crud-api/db/db').connect()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))



module.exports = app
