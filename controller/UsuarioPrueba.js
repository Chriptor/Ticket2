
// const validacion = require('../controller/validaciones')
// const User = require('../Model/Usuario')
// const bcrypt = require('bcrypt')

// module.exports.newUser = async(req,res)=>{
//     const { error } = validacion.schemaRegister.validate(req.body)
    
//      if (error) {
//          return res.status(400).json(
//              {error: error.details[0].message}
//          )
//      }
    
//      let emailEx = await User.findOne({
//         where: {
//             correo: req.body.correo
//         }
//       });
      
      
//      if (emailEx) {
//          console.log(emailEx);
//          console.log(typeof(emailEx));
//          return res.status(400).json({error: 'Email ya registrado'})
//     }
    
//     const ronda = await bcrypt.genSalt(10);
//     const password = await bcrypt.hash(req.body.password, ronda)
    
//     try {
//      User.create({
//         id: "",
//         nombre: req.body.nombre,
//         apellido_p: req.body.apellido_p,
//         apellido_m: req.body.apellido_m,
//         correo: req.body.correo,
//         pais: req.body.pais,
//         ciudad: req.body.ciudad,
//         foto_perfil: req.body.foto_perfil,
//         fecha_nac: req.body.fecha_nac,
//         estudios: req.body.estudios,
//         certificaciones: req.body.certificaciones,
//         idiomas: req.body.idiomas1,
//         linkedin: req.body.linkedin,
//         Hobbies: req.body.Hobbies,
//         password: password
//     })
    
//     res.json({
//         error: null
        
//     })
// } catch (error) {
//     res.status(400).json(error )    
// }
// }

// module.exports.listarUsuario=async()=>{

// try {
//     const Usuarios = await User.findAll();
//     return Usuarios
// } catch (error) {
//     console.log(error)
// }
// }

// module.exports.buscarUsuario=async(id)=>{
// let emailEx = await User.findOne({
//     where: {
//         id: id
//     }
//   });}