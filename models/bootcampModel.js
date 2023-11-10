const mongoose = require('mongoose')

//definir Scheme Bootcamp 

const BootcampSchema = new mongoose.Schema({

    name: {
        type: String, 
        unique: [true, "El nombre ya existe"],
        required: [
            true,
            "Nombre requerido"
        ]
    },
    phone: {
        type: Number,
        required: [
            true,
            "Teléfono requerido"
        ],
        max: [
            999999999,
            "Teléfono debe tener menos de 10 digitos"
        ],
        min:[
            1111111,
            "Teléfono debe tener al menos 7 digitos"
        ]
    },
    address:{
        type: String,
        required: [
            true, 
            "Dirección requerida"
        ]
    },
    topics:{
        type: [String],
        enum: [
            "Backend",
            "Frontend",
            "Devops",
            "AI"
        ]
    },
    createAt: Date

})

module.exports = mongoose.model("Bootcamp", 
                                BootcampSchema)