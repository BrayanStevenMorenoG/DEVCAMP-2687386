const mongoose = require('mongoose')

//definir Scheme Review

const ReviewsSchema = new mongoose.Schema({

    title: {
        type: String,
        unique: [true, "El titulo ya existe"],
        required: [
            true,
            "Titulo requerido"
        ],
        maxLength:[
            20,
            "El titulo debe terner menos de 21 caracteres"
        ]
    },
    text: {
        type: String,
        required: [
            true,
            "Comentario requerido"
        ],
        maxLength:[
            50,
            "El comentario debe terner 20 caracteres o menos"
        ]
    },
    rating: {
        type: Number,
        required: [
            true,
            "Clasificación requerida"
        ],
        max:[
            10,
            "Calificación de 1 a 10"
        ],
        min:[
            1,
            "Calificación de 1 a 10"
        ]
    }

})

module.exports = mongoose.model("Reviews",
                                ReviewsSchema)