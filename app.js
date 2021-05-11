const express = require('express')

require('dotenv').config()

const app = express()

const bodyParser = require('body-parser')

const cors = require('cors')

const route = require('./crud-api/routes')

app.use(bodyParser.json())
require('./crud-api/db/db').connect()

app.get('/', (req, res) => {
    return res.json({
        status: "Sucess",
        message: "Welcome to CRUDApp"
    })
})

app.use(route)

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))



module.exports = app
