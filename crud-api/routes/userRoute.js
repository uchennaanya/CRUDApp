const route = require('express').Router()
const userRoute = require('../controllers/user');

route.post('/api/v1/createuser', userRoute.createUser)
route.get('/api/v1/getuser', userRoute.getAllUser)
route.put('/api/v1/updateuser/:id', userRoute.updateUserById)
route.delete('/api/v1/deleteuser/:id', userRoute.deleteUser)

module.exports = route
