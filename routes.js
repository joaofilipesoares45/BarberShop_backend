const express = require('express');

const router = express.Router();

const UserController = require('./controllers/User.js') 

const ServiceController = require('./controllers/Service.js')

const database = require('./connection/database.js')
router.get('/database', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST,DELETE,PUT,GET");

    res.send(await database.dataQuery())
})

router.get('/users', UserController.index)

router.post('/new-user', UserController.store)

router.delete('/remove-user', UserController.delete)

router.post('/new-service', ServiceController.store)

router.delete('/remove-service', ServiceController.delete)

module.exports = router
