const mongoose = require('mongoose')

//definir Scheme Courses 

const CoursesSchema = new mongoose.Schema({

    title: {
        type: String, 
        unique: true,
        required: [
            true,
            "Titulo requerido"
        ]
    },
    description: {
        type: String, 
        unique: true,
        required: [
            true,
            "Descripción requerida"
        ]
    },
    weeks: {
        type: Number, 
        unique: true,
        required: [
            true,
            "Semana requerida"
        ]
    },
    min:[
        1,
        "Debe tener como minimo una semana"
    ],
    tuition: {
        type: Number,
        unique: true,
        required: [
            true,
            "Matricula requerida"
        ]                 
    },
    minimunSkill: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        required: [true, "Habilidad requerida"]
    },
    createdAt: Date

})

module.exports = mongoose.model("Courses",
                                CoursesSchema)