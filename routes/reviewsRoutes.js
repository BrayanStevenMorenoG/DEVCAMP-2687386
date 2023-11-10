const express = require('express')
const ReviewModel = require('../models/reviewsModel')
const reviewsModel = require('../models/reviewsModel')

//definir el ruteador

const router = express.Router()

// REVIEWS

// traer todos los reviews

router.get('/', async (req, res) => {

    // Utilizar el model para seleccionar todos los reviews de la base de datos

    const reviews = await ReviewModel.find()

    res.json({
        success: true,
        data: reviews
    })
})

// traer un review por id

router.get('/:id', async (req, res) =>{

    //Extraer el id del review del parametro de la url

    reviewId = req.params.id
    
    const review = await ReviewModel.findById(reviewId)

    res.json({
        success: true, 
        data: review
    })
})

// Crear un review

router.post('/', async (req, res) => {

    // El numero review vendra del body de la request 

    const newReview = await ReviewModel.create(req.body)

    res.json({
        success: true,
        data: newReview
    })
})

// actualizar un review por id

router.put('/:id', async (req, res) =>{

    // El numero review vendra a traves del body de la request 

    const reviewId = req.params.id

    const upReview = await ReviewModel.findByIdAndUpdate(reviewId, req.body, {new: true})

    res.json({
        success: true, 
        data: upReview
    })
})

// Eliminar review por id

router.delete('/:id', async (req, res) =>{

    const reviewId = req.params.id

    const delReview = await reviewsModel.findByIdAndDelete(reviewId)

    res.json({
        success: true, 
        data: delReview
    })
})

module.exports = router