const mongoose = require('mongoose')

//definir Scheme Review

const ReviewsSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [
            true,
            "Titulo requerido"
        ]
    },
    comment: {
        type: String,
        required: [
            true,
            "Comentario requerido"
        ]
    },
    rating: {
        type: Number,
        required: [
            true,
            "Clasificación requerida"
        ]
    }

})

module.exports = mongoose.model("Reviews",
                                ReviewsSchema)