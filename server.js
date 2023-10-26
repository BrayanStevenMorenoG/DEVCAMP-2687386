const express = require('express');
const dotenv = require('dotenv')
const colors = require('colors')

// Vincular en archivo .env
dotenv.config(
    {'path' : './config/.env'}
)

// Construir objeto app 
app = express()

// Rutas de prueba

app.get('/prueba', (request, response ) =>{
    response.send("HOla")
})

app.get('/prueba/:id', (request, response) =>{
    response.send(`Hola ${request.params.id}`)
})

// rutas de bootcamps
//endpoint

// BOOTCAMPS

// traer todos los bootcamps
app.get('/bootcamps', (req, res) => {
    res.json({
        success: true,
        msg: "Aqui se mostraran todos los bootcamps"
    })
})

// traer un bootcamp por id
app.get('/bootcamps/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se mostrara el bootcamp cuyo id es: ${req.params.id}`
    })
})

// Crear un bootcamp
app.post('/bootcamps', (req, res) => {
    res.json({
        success: true,
        msg: "Aqui se creara un bootcamp"
    })
})

// actualizar un bootcamp por id
app.put('/bootcamps/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se editara el bootcamp con id ${req.params.id}`
    })
})

// Eliminar bootcamp por id
app.delete('/bootcamps/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se eliminara el bootcamp con id ${req.params.id}`
    })
})

// COURSES

// traer todos los courses
app.get('/courses', (req, res) => {
    res.json({
        success: true,
        msg: "Aqui se mostraran todos los courses"
    })
})

// traer un course por id
app.get('/courses/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se mostrara el course cuyo id es: ${req.params.id}`
    })
})

// Crear un course
app.post('/courses', (req, res) => {
    res.json({
        success: true,
        msg: "Aqui se creara un course"
    })
})

// actualizar un course por id
app.put('/courses/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se editara el course con id ${req.params.id}`
    })
})

// Eliminar course por id
app.delete('/courses/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se eliminara el course con id ${req.params.id}`
    })
})

// COURSES

// traer todos los courses
app.get('/courses', (req, res) => {
    res.json({
        success: true,
        msg: "Aqui se mostraran todos los courses"
    })
})

// traer un course por id
app.get('/courses/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se mostrara el course cuyo id es: ${req.params.id}`
    })
})

// Crear un course
app.post('/courses', (req, res) => {
    res.json({
        success: true,
        msg: "Aqui se creara un course"
    })
})

// actualizar un course por id
app.put('/courses/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se editara course por id ${req.params.id}`
    })
})

// Eliminar course por id
app.delete('/courses/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se eliminara course por id ${req.params.id}`
    })
})

// USERS

// traer todos los users
app.get('/users', (req, res) => {
    res.json({
        success: true,
        msg: "Aqui se mostraran todos los users"
    })
})

// traer un user por id
app.get('/users/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se mostrara el user cuyo id es: ${req.params.id}`
    })
})

// Crear un user
app.post('/users', (req, res) => {
    res.json({
        success: true,
        msg: "Aqui se creara un user"
    })
})

// actualizar un user por id
app.put('/users/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se editara user por id ${req.params.id}`
    })
})

// Eliminar user por id
app.delete('/users/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se eliminara user por id ${req.params.id}`
    })
})

// REVIEWS

// traer todos los reviews
app.get('/reviews', (req, res) => {
    res.json({
        success: true,
        msg: "Aqui se mostraran todos los users"
    })
})

// traer un review por id
app.get('/reviews/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se mostrara el review cuyo id es: ${req.params.id}`
    })
})

// Crear un review
app.post('/reviews', (req, res) => {
    res.json({
        success: true,
        msg: "Aqui se creara un review"
    })
})

// actualizar un review por id
app.put('/reviews/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se editara review por id ${req.params.id}`
    })
})

// Eliminar review por id
app.delete('/reviews/:id', (req, res) =>{
    res.json({
        success: true, 
        msg: `Aqui se eliminara review por id ${req.params.id}`
    })
})

app.listen(process.env.PUERTO , () =>{
    console.log(`Servidor en ejecución ${process.env.PUERTO}`.bgYellow.yellow);
})