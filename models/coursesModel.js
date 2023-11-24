const mongoose = require('mongoose')

//definir Scheme Courses 

const CoursesSchema = new mongoose.Schema({

    title: {
        type: String, 
        unique: [true, "El titulo ya existe"],
        required: [
            true,
            "Titulo requerido"
        ],
        maxlength:[
            30,
            "El titulo no puede pasar los 30 caracteres"
        ],
        minlength:[
            10,
            "El titulo debe tener mas de 10 caracteres"
        ]
    },
    description: {
        type: String, 
        minlength:[
            10,
            "La descripción debe tener mas de 10 caracteres"
        ]
    },
    weeks: {
        type: Number,
        required: [
            true,
            "Semana requerida"
        ],
        min:[
            9,
            "Debe tener menos de 10 semanas"
        ]
    },
    enroll_cost: {
        type: Number,
        required: [
            true,
            "Requerido, digite un valor"
        ]                 
    },
    minimum_skill: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced','Expert'],
        required: [true, "Habilidad requerida"]
    }

})

module.exports = mongoose.model("Courses",
                                CoursesSchema)