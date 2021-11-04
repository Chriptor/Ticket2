const jwt = require('jsonwebtoken')
const Joi = require('@hapi/joi');
var cookieParser = require('cookie-parser')
const express = require('express');
const app=express()
app.use(cookieParser())

const verificaToken = (req, res, next) => {
    const token = req.cookies.access_token
    
    if(!token) {
        return res.render("404", {error: 'Acceso Denegado', TituloW:"Error"})
    }
    try {
        const verified = jwt.verify(token, process.env.SECRET_TOKEN)
        req.user = verified
        next()
    } catch (error) {
        res.render("404", {error: 'Token invalido', TituloW:"Error"})
    }
    
}

const schemaRegister = Joi.object({
    nombre: Joi.string().min(6).max(255).required(),
    apellido_p: Joi.string().min(6).max(255).required(),
    apellido_m: Joi.string().min(6).max(255).required(),
    correo: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    foto_perfil: Joi.string().min(6).required(),
    pais: Joi.string().min(3).required(),
    ciudad: Joi.string().min(3).required(),
    fecha_nac: Joi.date().required(),
    estudios: Joi.string().min(2).required(),
    certificaciones: Joi.string().min(2).required(),
    idiomas1: Joi.string().min(4),
    idiomas2: Joi.string().min(4),
    idiomas3: Joi.string().min(4),
    linkedin: Joi.string().min(6).required(),
    Hobbies: Joi.string().min(6).required()

})

const schemaLogin = Joi.object({
    correo: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

module.exports = {schemaRegister,schemaLogin, verificaToken}