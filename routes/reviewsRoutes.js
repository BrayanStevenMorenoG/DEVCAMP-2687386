const express = require('express')

//definir el ruteador

const router = express.Router()

// REVIEWS

// traer todos los reviews

router.get('/reviews', (req, res) => {
    res.json({
        success: true,
        msg: "Aqui se mostraran todos los users"
    })
})

// traer un review por id

router.get('/reviews/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se mostrara el review cuyo id es: ${req.params.id}`
    })
})

// Crear un review

router.post('/reviews', (req, res) => {
    res.json({
        success: true,
        msg: "Aqui se creara un review"
    })
})

// actualizar un review por id

router.put('/reviews/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se editara review por id ${req.params.id}`
    })
})

// Eliminar review por id

router.delete('/reviews/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se eliminara review por id ${req.params.id}`
    })
})

module.exports = router