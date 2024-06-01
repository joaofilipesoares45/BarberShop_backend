const express = require('express');
const router = express.Router();

// databaseFunctions
const database = require('../connection/database.js')

// Routes
router.get('/database', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST,DELETE,PUT,GET");
    res.send(await database.dataQuery(Number(req.headers.cpy)));
    console.log(await database.dataQuery(Number(req.headers.cpy)));
})

// Users
router.use('/user', require('./user.js'))

// Companies
router.use('/company', require('./company.js'))

// Services
router.use('/service', require('./services.js'))

module.exports = router
