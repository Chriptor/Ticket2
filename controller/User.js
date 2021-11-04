const validacion = require('../controller/validaciones')
const User = require('../model/Users')
const bcrypt = require('bcrypt')

module.exports.newUser = async(req,res)=>{
    const { error } = validacion.schemaRegister.validate(req.body)
    
     if (error) {
         return res.status(400).json(
             {error: error.details[0].message}
         )
     }
     
     const emailEx = await User.findOne({ email: req.body.email });
     if (emailEx) {
         return res.status(400).json({error: 'Email ya registrado'})
    }
    
    const ronda = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, ronda)
    let idioma1 = req.body.idiomas1
    let idioma2 = req.body.idiomas2
    let idioma3 = req.body.idiomas3
    if (idioma1==undefined)idioma1=""
    if (idioma2==undefined)idioma2=""
    if (idioma3==undefined)idioma3=""



    const user = new User({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        correo: req.body.correo,
        pais: req.body.pais,
        ciudad: req.body.ciudad,
        foto_perfil: req.body.foto_perfil,
        fecha_nac: req.body.fecha_nac,
        estudios: req.body.estudios,
        certificaciones: req.body.certificaciones,
        idiomas: idioma1 + idioma2 + idioma3,
        linkedin: req.body.linkedin,
        Hobbies: req.body.Hobbies,
        password: password
    })
try {
    const userDB = await user.save();
    res.json({
        error: null,
        data: userDB
    })
} catch (error) {
    res.status(400).json(error )    
}
}

module.exports.listarUsuario=async()=>{

try {
    const Usuarios = await User.find();
    return Usuarios
} catch (error) {
    console.log(error)
}
}

