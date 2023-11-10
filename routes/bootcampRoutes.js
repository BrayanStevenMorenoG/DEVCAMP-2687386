const express = require('express')
const BootcampModel = require('../models/bootcampModel')
const { default: mongoose } = require('mongoose')

//definir el ruteador

const router = express.Router()

// traer todos los bootcamps
router.get('/', async (req, res) => {

    // Utilizar el modelo para seleccionar todos los bootcamps de la base de datos

    try{

        const bootcamps = await BootcampModel.find()

        if(bootcamps.length > 0){
            
            res.
            status(200).
            json({
            success: true,
            data: bootcamps

        })

        } else {

            res.status(400)
            .json({
                success: false,
                message: "No hay bootcamps"
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

// traer un bootcamp por id
router.get('/:id', async (req, res) =>{

    //Extraer el id del bootcamp del parametro de la url

    try{

        bootcampId = req.params.id
    
        if(!mongoose.Types.ObjectId.isValid(bootcampId)){

            res.
            status(500).
            json({
            success: false, 
            msg: "Identificador invalido"

        })

        } else {

            const bootcamp = await BootcampModel.findById(bootcampId)

            if(bootcamp){
    
                res.
                status(200).
                json({
                success: true, 
                data: bootcamp
            })
    
            } else {
    
                res.status(400)
                .json({
                    success: false,
                    message: `El bootcamp con la id ${bootcampId} no existe`
                })
    
            }

        } 

    } catch (error){

        res.status(400)
            .json({
                success: false,
                message: error.message
            })

    }

})

// Crear un bootcamp
router.post('/', async (req, res) => {

    //El numero bootcamp vendra a traves del body de la request

    try{

        const newBootcamp = await BootcampModel.create(req.body)

        res.status(201).
            json({
            success: true,
            data : newBootcamp
        })

    } catch (error){
        res.status(400)
            .json({
                success: false,
                message: error.message
            })
    }
})

// actualizar un bootcamp por id

router.put('/:id', async (req, res) => {

    //El numero bootcamp vendra a traves del body de la request

    try{

        const bootcampId = req.params.id
    
        if(!mongoose.Types.ObjectId.isValid(bootcampId)){

            res.
            status(500).
            json({
            success: false, 
            msg: "Identificador invalido"

            })
    } else {

        const upBootcamp = await BootcampModel.findByIdAndUpdate(bootcampId, req.body, {new: true})

        if(upBootcamp){

            res.status(200).
                json({
                success: true,
                data : upBootcamp
            })

        } else {

            res.status(400)
            .json({
                success: false,
                message: `El bootcamp con la id ${bootcampId} no existe`
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

// Eliminar bootcamp por id
router.delete('/:id', async (req, res) =>{

    try{

        const bootcampId = req.params.id

        if(!mongoose.Types.ObjectId.isValid(bootcampId)){

            res.
            status(500).
            json({
            success: false, 
            msg: "Identificador invalido"

            })
        } else {

            const delBootcamp = await BootcampModel.findByIdAndDelete(bootcampId)
     
            res.status(200).
                json({
                success: true, 
                data: delBootcamp
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