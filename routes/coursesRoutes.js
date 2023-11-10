const express = require('express')
const CoursesModel = require('../models/coursesModel')

//definir el ruteador

const router = express.Router()

// COURSES

// traer todos los courses
router.get('/', async (req, res) => {

    // Utilizar el model para seleccionar todos los courses de la base de datos

    const courses = await CoursesModel.find()

    res.json({
        success: true,
        data: courses
    })
})

// traer un course por id
router.get('/:id', async (req, res) =>{

    // Extraer el id del course del paramero de la url 

    courseId = req.params.id

    const course = await CoursesModel.findById(courseId)

    res.json({
        success: true, 
        data: course
    })
})

// Crear un course
router.post('/', async (req, res) => {

    // El numero course vendra a traves del body de la request

    const newCourse = await CoursesModel.create(req.body)

    res.json({
        success: true,
        data: newCourse
    })
})

// actualizar un course por id
router.put('/:id', async (req, res) =>{

    // El número coure vendra del body de la request

    const courseId = req.params.id

    const upCourse = await CoursesModel.findByIdAndUpdate(courseId, req.body, {new: true})

    res.json({
        success: true, 
        data: upCourse
    })
})

// Eliminar course por id
router.delete('/:id', async (req, res) =>{

    const courseId = req.params.id

    const delCourse = await CoursesModel.findByIdAndDelete(courseId)

    res.json({
        success: true, 
        data: delCourse
    })
})

module.exports = router