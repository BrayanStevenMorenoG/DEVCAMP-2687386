const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

//definir Schema Users

const UsersSchema = new mongoose.Schema({

    name: {
        type: String, 
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
        ],
        match: [
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
            "Correo electrónico inválido"
        ]
    },
    role: {
        type: String, 
        enum: ["admin","user","publisher"],
        
        required: [
            true,
            "Rol requerido"
        ]
    },
    password: {
        type: String, 
        required: [
            true,
            "Contraseña requerida"
        ],
        maxlength: [
            6,
            "password maximo de 6 caracteres"
        ],
        select: false
    },
    creareAt: {
        type: Date,
        default: Date.now
    }
})

UsersSchema.pre('save', async function(){

    //generar la sal
    //encriptar el password utilizando la sal
    const sal = await bcryptjs.genSalt(10)

    this.password = await bcryptjs.hash(this.password, sal)

})

//metodo para comparar password del usuario vs password del body

UsersSchema.methods.compararPassword = async function(password){
    return bcryptjs.compare(password, this.password)
}

//metodo vinculado al modelo para crear el jwt 
UsersSchema.methods.generarJWT = function(){
    return jwt.sign({
        id: this._id,
        name: this.name
                    },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: process.env.JWT_EXPIRE
        }            
                    )
}

module.exports = mongoose.model("Users",
                                UsersSchema)