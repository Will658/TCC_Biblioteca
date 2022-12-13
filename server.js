const mysql = require("mysql2");

var connection = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"usbw",
    database:"portaldoslivros",
    port: 3307,
});

//inicia o servidor
// const bcrypt = require('bcrypt')
const express = require('express');
const cors = require('cors');
const User = require('./models/User');
const Inst = require('./models/inst');
const Hora = require('./models/hora');
const Curso = require('./models/curso');
const path = require('path');
const session = require('express-session')
// const cookieParser = require('cookie-parser');
const app = express();

//require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser');
app.use(express.Router());
app.use(session({secret: "sssshhhh"}))
app.use(cors({
    origin: "*",
}));
//início da biblioteca JSON -> conversão de dados
app.use(express.json());

//////////////////////////
app.get('/', (req, res) => {
    var message = ' s';
    req.session.destroy();
    res.render('views/registro', { message: message });
});


//listar editoras
app.get('/listar-editoras', (req, res, next)=>{
    connection.query("SELECT * FROM editoras", function(error, results, fields) {
        if (error) throw error;
        res.send(results);
        res.end();
    });
})

app.post("/gravar-editora", (req, res, next) => {
    console.log(req.body);
    const nomeEditora = req.body.nomeEditora;
    const siteEditora = req.body.siteEditora;
    const endEditora = req.body.endEditora;
    const telEditora = req.body.telEditora;

    const save = `INSERT INTO editoras (nomeEditora, siteEditora, endEditora, telEditora) VALUES ('${nomeEditora}',
    '${siteEditora}', '${endEditora}', '${telEditora}')`;
    connection.query(save, function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"resultado": "Inserção de editora feita!"}))
    });
});

//livros
app.get('/listar-livros', (req, res, next)=>{
    connection.query("SELECT * FROM livros", function(error, results, fields) {
        if (error) throw error;
        res.send(results);
        res.end();
    });
})

//Adm
app.get('/listar-adm', (req, res, next)=>{
    connection.query("SELECT * FROM administradores", function(error, results, fields) {
        if (error) throw error;
        res.send(results);
        res.end();
    });
})

//Usuários

app.get('/listar-usuarios', (req, res, next)=>{
    connection.query("SELECT * FROM usuarios", function(error, results, fields) {
        if (error) throw error;
        res.send(results);
        res.end();
    });
})

app.post("/gravar-usuario", (req, res, next) => {
    console.log(req.body);
    const nomeUsuario = req.body.nomeUsuario;
    const emailUsuario = req.body.emailUsuario;
    const senhaUsuario = req.body.senhaUsuario;
    const idInst = req.body.idInst;
    const idCurso = req.body.idCurso;
    const idHorario = req.body.idHorario;

    const save = `INSERT INTO usuarios (nomeUsuario, emailUsuario, senhaUsuario, idInst, idCurso, idHorario) VALUES ('${nomeUsuario}',
    '${emailUsuario}', '${senhaUsuario}', '${idInst}', '${idCurso}', '${idHorario}')`;
    connection.query(save, function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"resultado": "Inserção de Usuário feita!"}))
    });
});

//login
//authentication
app.get('/login1', (req, res, next) => {
    connection.query("SELECT * FROM usuarios", function(error, results, fields) {
        if (error) throw error;
        console.log (req.body)
        results.forEach((res) => {
            console.log(res.emailUsuario)
            if (req.body.senhaUsuario === res.senhaUsuario ) {
                console.log("Senhas verdadeiras!")
                alert('Senhas são verdadeiras!')
            }
        })
        res.send();
       // res.end();
        next();
    });
})

//rota para home
app.get("/views/home", function (req, res){
    
    //verifica se existe seção ativa
    //if (req.session.user){
      //  var query2 = 'SELECT * FROM usuarios WHERE emailUsuario LIKE ?';
        //con.query(query2, [req.session.user], function (err, results){
          //  res.render('views/home', {message:results});
            
        //});
        
    //}else{
      //  res.redirect("/");
    //}
    res.sendFile(path.join(__dirname+'/message.txt'))
});


app.post('/login2', async (req, res, next) => {
    User.findOne({
        attributes: ['idUsuario', 'nomeUsuario', 'emailUsuario', 'senhaUsuario', 'idInst', 'idCurso', 'idHorario'],
        where: {
            emailUsuario: req.body.emailUsuario,
            senhaUsuario: req.body.senhaUsuario
        },
    }).then((user) => {
        if (user === null) {
            isLogged = false;
            res.status(500).json({ autenticado: false, message: "Login inválido!" });
        } else{
            req.session.user = req.body.emailUsuario
            req.session.user = req.body.senhaUsuario
            var id = user.idUsuario
            var token = jwt.sign({id}, 'AL3DF21GDFG1B21VD6F5V1', {
                expiresIn: '1d'
            });
            console.log(token)
            return res.json({'ok': true, 'token': token}),
            res.end(); 
        }
        });
});



app.listen(2929, () => {
    console.log('Conexão Realizada!')
})

//get -> pegar dados
//post -> salvar/enviar dados