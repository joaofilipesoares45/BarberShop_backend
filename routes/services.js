const express = require('express');
const router = express.Router();

const ServiceController = require('../controllers/Service.js')
router.get('/', ServiceController.index)
router.post('/', ServiceController.store)
router.put('/', ServiceController.update)
router.delete('/', ServiceController.delete)

module.exports = router
