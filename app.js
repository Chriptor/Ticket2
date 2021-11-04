const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyparser = require('body-parser'); 
const rutasUsuario = require('./views/Usuario')
const login = require('./views/login')
const { verificaToken } = require('./controller/validaciones');
const cookieParser = require('cookie-parser');
const lista=require('./controller/User')

const app = express();

app.use(cookieParser())
app.use(express.json({limit: '50mb'}))
app.use(cors());


app.set('view engine','ejs');
app.set('views', __dirname + '/view');
app.use(express.static(__dirname + "/public"));
app.use(bodyparser.urlencoded({limit: '50mb'}));
app.use(bodyparser.json());

const uriMongo = `mongodb+srv://${process.env.DB_USR}:${process.env.DB_PASS}@cluster0.q8rfj.mongodb.net/${process.env.DB_DB}?retryWrites=true&w=majority`

async function serverStart() {
    mongoose.connect(uriMongo,
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true
            
        }).then(r => {
        app.listen(process.env.PORT, () => {
            console.log("Servidor Iniciado en el puerto " + process.env.PORT)
            console.log("conctado a db "+ uriMongo)
        })
    }).catch(error => {
        console.log(error)
        console.log("No pude conectar a la base de datos")
    })
}



app.use('/', login )
app.get('/', (req, res) => {
    res.render("index",{Invalido:"", error:""})
})
app.get('/registrate', (req, res) => {

    res.render("registro",{Invalido:"", error:""})
})
app.get('/info/:id', async (req, res) => {
    // res.render('info', {TituloW:"Info"})
    res.render('info', {TituloW:"Info", info: await lista.buscar1Usuario(req.params.id), foto: await lista.buscarImagenUsuario(req.params.id)})
})
app.use('/', rutasUsuario )
app.get('/dashboard', verificaToken, async (req, res) => {
    
    res.render("dashboard",{TituloW:"Dashboard", arrayUsuario: await lista.listarUsuario(), userLoged: await lista.buscar1Usuario(req.cookies.idUser)})
})
app.get('/salir', async (req, res) => {
    
    res
        .status(201)
        .cookie('access_token' , {
          expires: new Date(Date.now() + 8 * 3600000) 
        })
        .redirect(301, '/')
    })
   


    

    serverStart();
