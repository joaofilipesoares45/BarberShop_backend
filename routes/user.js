const express = require('express');
const router = express.Router();

const UserController = require('../controllers/User.js')
router.get('/', UserController.index)
router.post('/', UserController.store)
router.put('/', UserController.update)
router.delete('/', UserController.delete)

module.exports = router
