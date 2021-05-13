const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const route = require('./crud-api/routes')

require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser.json())
require('./crud-api/db/db').connect()

app.get('/', (req, res) => {
    return res.json({
        status: "Sucess",
        message: "Welcome to CRUDApp"
    })
})

app.use(route)

app.use(cors())
// app.use(bodyParser.urlencoded({ extended: true }))

module.exports = app
