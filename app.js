const express = require('express')
const app = express()

const cors = require('cors')
const route = require('./crud-api/routes')

require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./crud-api/db/db').connect()

app.get('/', (req, res) => {
    return res.json({
        status: "Sucess",
        message: "Welcome to CRUDApp"
    })
})

app.use(route)

app.use(cors())

module.exports = app
