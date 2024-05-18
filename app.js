const express = require('express');
const cors = require('cors');
const routes = require('./routes.js')

require('dotenv/config');
const ENV = process.env
const port = ENV.PORT

const app = express()
app.use(express.json())
app.use(cors());
app.use(routes)

app.listen(port, (req, res) => {
    console.log('Rodando na porta ' + port);
    console.log(`link: http://127.0.0.1:${port}`)
})
