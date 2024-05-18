const express = require('express');
const cors = require('cors');

require('dotenv/config');
const ENV = process.env
const app = express()
app.use(express.json())
app.use(cors());

const port = ENV.PORT

const database = require('./connection/database')

app.get('/database', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST,DELETE,PUT,GET");

    database.dataQuery().then(ret => {
        res.send({ clientes: ret[0][0], agenda: ret[1][0], itens: ret[2][0], servicos: ret[3][0] })
    })
})

app.get('/users', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST,DELETE,PUT,GET");

    database.selectTable('usuarios')
        .then(data => res.send(data[0]))
})

app.post('/new-user', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST,DELETE,PUT,GET");

    database.addInTable('usuarios', req.body)
        .then(ret => {
            if (req.body.tipo === 'empresa') {
                req.body.id = ret[0][0]['LAST_INSERT_ID()']
                database.addInTable('empresa', req.body)
            }
            res.send('OK')
        })
})

app.delete('/remove-user', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST,DELETE,PUT,GET");

    if (req.body.id !== undefined) {
        database.removeOfTable('usuarios', req.body.id)
            .then(ret => res.send(ret))
    }
})

app.post('/new-service', (req, res) => {
    database.addInTable('servicos', req.body)
        .then(ret => res.send(ret))
})

app.delete('/remove-service', (req, res) => {
    if (req.body.id !== undefined) {
        database.removeOfTable('servicos', req.body.id)
            .then(ret => res.send(ret))
    }
})

app.get('/table', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST,DELETE,PUT,GET");
    
})

app.listen(port, (req, res) => {
    console.log('Rodando na porta ' + port);
    console.log(`link: http://127.0.0.1:${port}`)
})

