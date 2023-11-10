const express = require('express')
const CoursesModel = require('../models/coursesModel')
const { default: mongoose } = require('mongoose')

//definir el ruteador

const router = express.Router()

// COURSES

// traer todos los courses
router.get('/', async (req, res) => {

    // Utilizar el model para seleccionar todos los courses de la base de datos

    try{
        
        const courses = await CoursesModel.find()   

        if (courses.length > 0){
            
            res.json({
                success: true,
                data: courses
            })

        } else {

            res.status(400)
                .json({
                    success: false,
                    message: "No hay cursos"
                })

        } 

    } catch (error) {

        res.status(400)
            .json({
                success: false,
                message: error.message
            })

    }
})

// traer un course por id
router.get('/:id', async (req, res) =>{

    try{

        courseId = req.params.id

        if(!mongoose.Types.ObjectId.isValid(courseId)){

            res.status(500)
                .json({
                    success: false,
                    message: "Identificador invalido"
                })

        } else {

            const course = await CoursesModel.findById(courseId)

            if(course){

                res.status(200)
                    .json({
                    success: true, 
                    data: course
                })

            } else {

                res.status(400)
                    .json({
                        success: false,
                        message: `El course con la id ${courseId} no existe`
                    })
            }
        }

    } catch (error) {

        res.status(400)
            .json({
                success: false,
                message: error.message
            })

    }
})


// Crear un course
router.post('/', async (req, res) => {

    // El numero course vendra a traves del body de la request

    try{

        const newCourse = await CoursesModel.create(req.body)

        res.status(201)
            .json({
            success: true,
            data: newCourse
        })

    } catch (error) {

        res.status(400)
            .json({
                success: false,
                message: error.message
            })

    }

})

// actualizar un course por id
router.put('/:id', async (req, res) =>{

    // El número coure vendra del body de la request

    try {
        
        const courseId = req.params.id

        if(!mongoose.Types.ObjectId.isValid(courseId)){

            res.
            status(500).
            json({
            success: false, 
            msg: "Identificador invalido"

            })  

        } else {

            const upCourse = await CoursesModel.findByIdAndUpdate(courseId, req.body, {new: true})

            if(upCourse){

                res.status(200)
                    .json({
                        success: true,
                        data: upCourse
                    })

            } else {

                res.status(400)
                    .json({
                    success: false, 
                    data: `El bootcamp con la id ${bootcampId} no existe`
                })

            }

        }

    } catch (error) {

        res.status(400)
            .json({
                success: false,
                message: error.message
            })

    }

})

// Eliminar course por id
router.delete('/:id', async (req, res) =>{

    try {

        const courseId = req.params.id

        if(!mongoose.Types.ObjectId.isValid(courseId)){

            res.status(500)
                .json({
                    success: false,
                    message: "Identificador invalido"
                })

        } else {

            const delCourse = await CoursesModel.findByIdAndDelete(courseId)

            res.json({
                success: true, 
                data: delCourse
            })

        }


    } catch (error) {

        res.status(400)
            .json({
                success: false,
                message: error.message
            })

    }
})

module.exports = router