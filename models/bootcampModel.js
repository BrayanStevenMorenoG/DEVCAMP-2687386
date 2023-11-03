const mongoose = require('mongoose')

//definir Scheme Bootcamp 

const BootcampSchema = new mongoose.Schema({

    name: {
        type: String, 
        unique: true,
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
        maxlength: [
            10,
            "Teléfono debe tener menos de 10 digitos"
        ],
        minlength:[
            7,
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