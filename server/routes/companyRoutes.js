const express = require('express');
const companyController = require('../controllers/companyController');

const router = express.Router();

router.route('/').get(companyController.getAllCompanies);

module.exports = router;
