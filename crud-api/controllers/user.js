// const express = require('express').Router()
const User = require('../models/users')
require('dotenv').config()

exports.createUser = async (req, res) => {
    let userExist = await User.findOne({ firstname: req.body.firstname })
    if (userExist) {
        return res.json({
            message: 'Error!',
            response: 'User already exist'
        })
    } else {
        let { firstname, lastname, age } = req.body
        let newUser = new User({
            firstname, lastname, age
        })

        let data = await newUser.save()
        return res.json({
            message: 'success',
            userData: data
        })
    }
}

exports.getAllUser = async (req, res) => {
    let getUsers = await User.find({})
    return res.json({
        message: "Success!",
        response: getUsers
    })
}
"609a93901596a93193bc87a0"
exports.updateUserById = async (req, res) => {
    try {
        let { firstname, lastname, age } = req.body
        let updated = await User.findByIdAndUpdate(req.params.id, { firstname, lastname, age }, { new: true })
        return res.json({
            message: "Success!",
            response: updated
        })

    } catch (err) {
        return res.json({
            message: err.message,
            response: "Fail to update"
        })
    }

}

exports.deleteUser = async (req, res) => {
    try {
        let deleteuser = await User.findByIdAndDelete({ _id: req.params.id })
        return res.json({
            message: "Sucess",
            response: deleteuser
        })
    } catch (err) {

    }
}