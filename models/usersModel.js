const mongoose = require('mongoose')

//definir Schema Users

const UsersSchema = new mongoose.Schema({

    name: {
        type: String, 
        unique: true,
        required: [
            true,
            "Nombre requerido"
        ]
    },
    email: {
        type: String, 
        unique: true,
        required: [
            true,
            "Correo requerido"
        ]
    },
    role: {
        type: String, 
        unique: true,
        required: [
            true,
            "Rol requerido"
        ]
    },
    password: {
        type: String, 
        unique: true,
        required: [
            true,
            "Contraseña requerida"
        ]
    },

})

module.exports = mongoose.model("Users",
                                UsersSchema)