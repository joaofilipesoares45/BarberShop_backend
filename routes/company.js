const express = require('express');
const router = express.Router();

const CompanyController = require('../controllers/Company.js')
router.get('/', CompanyController.index)
router.post('/', CompanyController.store)
router.put('/', CompanyController.update)
router.delete('/', CompanyController.delete)

module.exports = router
