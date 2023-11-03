const express = require('express')
const BootcampModel = require('../models/bootcampModel')
const bootcampModel = require('../models/bootcampModel')

//definir el ruteador

const router = express.Router()

// traer todos los bootcamps
router.get('/', async (req, res) => {

    // Utilizar el modelo para seleccionar todos los bootcamps de la base de datos

    const bootcamps = await BootcampModel.find()

    res.json({
        success: true,
        data: bootcamps
    })
})

// traer un bootcamp por id
router.get('/:id', async (req, res) =>{

    //Extraer el id del bootcamp del parametro de la url

    bootcampId = req.params.id

    const bootcamp = await BootcampModel.findById(bootcampId)

    res.json({
        success: true, 
        data: bootcamp
    })
})

// Crear un bootcamp
router.post('/', async (req, res) => {

    //El numero bootcamp vendra a traves del body de la request

    const newBootcamp = await BootcampModel.create(req.body)

    res.json({
        success: true,
        data : newBootcamp
    })
})

// actualizar un bootcamp por id

router.put('/:id', async (req, res) => {

    //El numero bootcamp vendra a traves del body de la request

    const bootcampId = req.params.id

    const upBootcamp = await BootcampModel.findByIdAndUpdate(bootcampId, req.body, {new: true})

    res.json({
        success: true,
        data : upBootcamp
    })
})

// Eliminar bootcamp por id
router.delete('/:id', async (req, res) =>{

    const bootcampId = req.params.id

    const delBootcamp = await bootcampModel.findByIdAndDelete(bootcampId)
     
    res.json({
        success: true, 
        data: delBootcamp
    })
})

module.exports = router