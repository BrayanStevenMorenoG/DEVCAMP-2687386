const express = require('express')

//definir el ruteador

const router = express.Router()

// COURSES

// traer todos los courses
router.get('/courses', (req, res) => {
    res.json({
        success: true,
        msg: "Aqui se mostraran todos los courses"
    })
})

// traer un course por id
router.get('/courses/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se mostrara el course cuyo id es: ${req.params.id}`
    })
})

// Crear un course
router.post('/courses', (req, res) => {
    res.json({
        success: true,
        msg: "Aqui se creara un course"
    })
})

// actualizar un course por id
router.put('/courses/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se editara el course con id ${req.params.id}`
    })
})

// Eliminar course por id
router.delete('/courses/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se eliminara el course con id ${req.params.id}`
    })
})

module.exports = router