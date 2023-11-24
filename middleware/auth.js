const jwt = require('jsonwebtoken');
const UsersModel = require('../models/usersModel');

//middleware para proteger rutas a usuarios no logados

exports.protect = async(req, res, next) => {

    let token
    //1. verificar si existe el header 'Authorization'
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1]
    }
    if (!token){
        return res.status(401)
                  .json({
                    success: false,
                    message: "Token invalido"
                  })
    } else {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        //console.log(decoded);
        //añadir al request el user

        req.user = await UsersModel.findById(decoded.id)
        //redirigir a la ruta de crear bootcamps
        next()

    }

}

//middle para proteger de usuarios que no tengan el rol especifico

exports.authorize = async(req, res, next) => {

}