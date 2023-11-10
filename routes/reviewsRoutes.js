const express = require('express')
const ReviewModel = require('../models/reviewsModel')
const { default: mongoose } = require('mongoose')

//definir el ruteador

const router = express.Router()

// REVIEWS

// traer todos los reviews

router.get('/', async (req, res) => {

    // Utilizar el model para seleccionar todos los reviews de la base de datos

    try {

        const reviews = await ReviewModel.find()

        if(reviews.length > 0){

            res.status(200)
                .json({
                    success: true,
                    data: reviews
                })

        } else {

            res.status(400)
                .json({
                    success: false,
                    message: "No hay reviews"
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

// traer un review por id

router.get('/:id', async (req, res) =>{

    //Extraer el id del review del parametro de la url

    try{
        
        reviewId = req.params.id

        if(!mongoose.Types.ObjectId.isValid(reviewId)){

            res.status(500)
                .json({
                    success: false,
                    message: "Identificador invalido"
                })

        } else {

            const review = await ReviewModel.findById(reviewId)

            if (review){

                res.status(200)
                    .json({
                    success: true, 
                    data: review
                })

            } else {

                res.status(400)
                    .json({
                        success: false,
                        message: `El review con la id ${reviewId} no existe`
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

// Crear un review

router.post('/', async (req, res) => {

    // El numero review vendra del body de la request 

    try {

        const newReview = await ReviewModel.create(req.body)

        res.status(201)
            .json({
            success: true,
            data: newReview
        })

    } catch (error) {

        res.status(400)
            .json({
                success: false,
                message: error.message
            })

    }

})

// actualizar un review por id

router.put('/:id', async (req, res) =>{

    // El numero review vendra a traves del body de la request 

    try {

        const reviewId = req.params.id

        if(!mongoose.Types.ObjectId.isValid(reviewId)){

            res.
            status(500).
            json({
            success: false, 
            msg: "Identificador invalido"

            })

        } else {

            const upReview = await ReviewModel.findByIdAndUpdate(reviewId, req.body, {new: true})

            if(upReview){

                res.status(200)
                    .json({
                    success: true, 
                    data: upReview
                })

            } else {

                res.status(400)
                .json({
                    success: false,
                    message: `El review con la id ${reviewId} no existe`
                })

            }

        }

    } catch (error) {



    }
})

// Eliminar review por id

router.delete('/:id', async (req, res) =>{

    try {

        const reviewId = req.params.id

        if(!mongoose.Types.ObjectId.isValid(reviewId)){

            res.
            status(500).
            json({
            success: false, 
            msg: "Identificador invalido"

            })

        } else {

            const delReview = await ReviewModel.findByIdAndDelete(reviewId)

            res.status(200)
                .json({
                success: true, 
                data: delReview
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