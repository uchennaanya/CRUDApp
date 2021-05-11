const { Mongoose } = require('mongoose')

require('.env').config()
const mongoose = require('mongoose')
const { use } = require('../../app')

module.exports = {
    connect: () => {
        mongoose.connect(
            process.env.DB_URI, {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false
        })
        const connection = mongoose.connection
        connection.once('open', () => {
            console.log('success! ')
        })
        connection.on('error', console.log('Error! '))
    }
}

