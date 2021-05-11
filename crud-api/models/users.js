const mongoose = require('mongoose')

const schema = mongoose.Schema

const userSchema = new Schema({
    "first-name": {
        type: String,
        required: true,
    },
    "last-name": {
        type: String,
        required: true,
    },
    "age": {
        tyep: Number,
        required: true
    }

})

module.exports = mongoose.model("user", userSchema)