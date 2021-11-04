const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    
    nombre: {
        type: String,
        required: true,
        min: 3,
        max: 150
    },
    apellido_p: {
        type: String,
        required: true,
        min: 3,
        max: 150
    },
    apellido_m: {
        type: String,
        required: true,
        min: 3,
        max: 150
    },
    correo: {
        type: String,
        required: true,
        unique:true,
        min: 5,
        max: 1024
    },
    pais:{
        type: String,
        required: true,
        min: 3,
        max: 150
    },
    ciudad:{
        type: String,
        required: true,
        min: 3,
        max: 150
    },
    foto_perfil:{
        type: String,
        required: true,
        min: 3,
    },
    fecha_nac: {
        type: Date,
    },
    estudios:{
        type: String,
        required: true,
        minlength: 3
    },
    certificaciones:{
        type: String,
        required: true,
        minlength: 3
    },
    idiomas:{
        type: String,
        required: true,
        minlength: 3
    },
    linkedin:{
        type: String,
        required: true,
        minlength: 3
    },
    Hobbies:{
        type: String,
        required: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    date: {
        type: Date,
        default: Date.now
    },
    amigos: [{ compis: String, solicitudes: String }],
    mensajes:[{de: String, texto: String}]
})

module.exports = mongoose.model('User', userSchema);