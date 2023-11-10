const express = require('express')
const UsersModel = require('../models/usersModel')
const UsersModel = require('../models/usersModel')

//definir el ruteador

const router = express.Router()

// USERS

// traer todos los users
router.get('/', async (req, res) => {

    const users = await UsersModel.find()

    res.json({
        success: true,
        data: users
    })
})

// traer un user por id
router.get('/:id', async (req, res) =>{

    userId = req.params.id
    
    const user = await UsersModel.findById(userId)

    res.json({
        success: true, 
        data: user
    })
})

// Crear un user
router.post('/', async (req, res) => {

    const newUser = await UsersModel.create(req.body)

    res.json({
        success: true,
        data: newUser
    })
})

// actualizar un user por id
router.put('/:id', async (req, res) =>{

    const userId = req.params.id

    const upUser = await UsersModel.findByIdAndUpdate(userId, req.body, {new: true})

    res.json({
        success: true, 
        data: upUser
    })
})

// Eliminar user por id
router.delete('/:id', async (req, res) =>{

    const userId = req.params.id

    const delUser = await UsersModel.findByIdAndDelete(userId)

    res.json({
        success: true, 
        data: delUser
    })
})

module.exports = router