const express = require('express')

//definir el ruteador

const router = express.Router()

// USERS

// traer todos los users
router.get('/users', (req, res) => {
    res.json({
        success: true,
        msg: "Aqui se mostraran todos los users"
    })
})

// traer un user por id
router.get('/users/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se mostrara el user cuyo id es: ${req.params.id}`
    })
})

// Crear un user
router.post('/users', (req, res) => {
    res.json({
        success: true,
        msg: "Aqui se creara un user"
    })
})

// actualizar un user por id
router.put('/users/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se editara user por id ${req.params.id}`
    })
})

// Eliminar user por id
router.delete('/users/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se eliminara user por id ${req.params.id}`
    })
})

module.exports = router