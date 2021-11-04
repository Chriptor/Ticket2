const router = require('express').Router();
const users =  require('../controller/User')

router.get('/user', async (req, res) => {
    const arrayUsuario = await users.listarUsuario();
    res.render('usuarios', {TituloW:"Usuarios",arrayUsuario})
})

router.post('/registrar', async (req, res) => {
    users.newUser(req,res);
})

// router.get('/info:id', async (req, res) => {
//     console.log("si entra");
//     // res.render('info', {TituloW:"Info"})
//     res.render('info', {TituloW:"Info", info: await users.buscar1Usuario(req.params.id)})
// })


module.exports=router;