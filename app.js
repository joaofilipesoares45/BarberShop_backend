const express = require('express');
const cors = require('cors');

require('dotenv/config');
const ENV = process.env
const app = express()
app.use(express.json())
app.use(cors());

const port = ENV.PORT

const database = require('./connection/database')

app.get('/usuarios', (req, res) => {
    database.selectTable('usuarios')
        .then(data => res.send(data[0]))
})

app.post('/new-user', (req, res) => {
    let user = {
        "nome": "Usuario 1",
        "email": "usuario1@gmail.com",
        "cpf": "001.001.001-01",
        "tipo": "empresa"
    }
    if (req.body.user !== undefined) {
        user = {
            nome: req.body.user.nome,
            email: req.body.user.email,
            cpf: req.body.user.cpf,
            tipo: req.body.user.tipo
        }
    }
    database.addInTable('usuarios', user)
        .then(ret => res.send(ret))
})

app.delete('/remove-user', (req, res) => {
    let id = 1
    if (req.body.user_id !== undefined) {
        id = req.body.user_id
    }

    database.removeOfTable('usuarios', id)
        .then(ret => res.send(ret))
})

app.listen(port, (req, res) => {
    console.log('Rodando na porta ' + port);
    console.log(`link: http://127.0.0.1:${port}`)
})
