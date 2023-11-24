const express = require('express')
const UsersModel = require('../models/usersModel')
const mongoose = require('mongoose')

//definir el ruteador

const router = express.Router()

// USERS

// registro de usuarios

router.post('/register', async (req,res) =>{

    try {
        
        const user = await UsersModel.create(req.body)

        res.status(201)
            .json({
                success: true,
                data: user
            })

    } catch (error) {
        
        res.status(400)
            .json({
                success: false,
                message: error.message
            })

    }

})

//login 
router.post('/login', async (req,res) =>{
    
    //1. No se envie email ni password

    const {email, password} = req.body;
    if (!email || !password){
        return res.status(400)
                  .json({
                    success: false,
                    message: "Falta email o password"
                  })
    } else {
        //2. Si llega email, pero el usuario no existe

        const user = await UsersModel.find({email}).select("+password")

        // console.log(user);

        if(user==null){
            return res.status(400)
                      .json({
                        success: false,
                        message: "El usuario no existe"
                      })
        }else {
            //3. Si llega emali, y el usuario existe pero el password no corresponde 

            const isMatch = await user.compararPassword(password)

            console.log(isMatch);

            if(isMatch){
                
                return res.status(200)
                          .json({
                            success: true,
                            msg: "usuario logueado correctamente",
                            data: user
                          })
            } else {

                return res.status(400)
                          .json({
                            success: false,
                            msg: "Credenciales incorrectas"
                          })

            }
        }
    }

    

})

// traer todos los users
// router.get('/', async (req, res) => {

//     const users = await UsersModel.find()

//     res.json({
//         success: true,
//         data: users
//     })
// })

// // traer un user por id
// router.get('/:id', async (req, res) =>{

//     userId = req.params.id
    
//     const user = await UsersModel.findById(userId)

//     res.json({
//         success: true, 
//         data: user
//     })
// })

// // Crear un user
// router.post('/', async (req, res) => {

//     const newUser = await UsersModel.create(req.body)

//     res.json({
//         success: true,
//         data: newUser
//     })
// })

// // actualizar un user por id
// router.put('/:id', async (req, res) =>{

//     const userId = req.params.id

//     const upUser = await UsersModel.findByIdAndUpdate(userId, req.body, {new: true})

//     res.json({
//         success: true, 
//         data: upUser
//     })
// })

// // Eliminar user por id
// router.delete('/:id', async (req, res) =>{

//     const userId = req.params.id

//     const delUser = await UsersModel.findByIdAndDelete(userId)

//     res.json({
//         success: true, 
//         data: delUser
//     })
// })

module.exports = router