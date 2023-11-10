const express = require('express');
const dotenv = require('dotenv')
const colors = require('colors')
const conectarDB = require('./config/db')

// dependencias de rutas
const bootcampRoutes = require('./routes/bootcampRoutes')
const coursesRoutes = require('./routes/coursesRoutes')
const reviewcRoutes = require('./routes/reviewsRoutes')
const userRoutes = require('./routes/usersRoutes')

// Vincular en archivo .env
dotenv.config(
    {'path' : './config/.env'}
)

// CONECTAR A DB
conectarDB()


// Construir objeto app 
const app = express()

app.use(express.json())

//conectar las rutas al objeto app

app.use('/api/v1/devcamp/bootcamps', 
        bootcampRoutes)

app.use('/api/v1/devcamp/courses', 
        coursesRoutes);


app.use('/api/v1/devcamp/reviews', 
        reviewcRoutes)

app.use('/api/v1/devcamp/users', 
        userRoutes)

app.listen(process.env.PUERTO , () =>{
    console.log(`Servidor en ejecución ${process.env.PUERTO}`.bgYellow.yellow);
})