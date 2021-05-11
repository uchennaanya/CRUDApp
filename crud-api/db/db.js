const { Mongoose } = require('mongoose')

require('dotenv').config()
const mongoose = require('mongoose')

module.exports = {
    connect: () => {
        mongoose.connect(
            process.env.DB_URI_ONLINE, {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false
        })
        const connection = mongoose.connection
        connection.once('open', () => {
            console.log('success! ')
        })
        connection.on('error', () => console.log('failed to connect to db'))
    }
}

