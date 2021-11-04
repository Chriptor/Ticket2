const router = require('express').Router();
const users =  require('../controller/User')

router.get('/user', async (req, res) => {
    const arrayUsuario = await users.listarUsuario();
    res.render('usuarios', {TituloW:"Usuarios",arrayUsuario})
})

router.post('/registrar', async (req, res) => {
    users.newUser(req,res);
})

router.get('/info', async (req, res) => {
    
    res.render('info', {TituloW:"Info",})
})


module.exports=router;