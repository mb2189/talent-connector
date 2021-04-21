const express = require('express');
const talentController = require('../controllers/talentController');

const router = express.Router();

router
  .route('/')
  .get(talentController.getAllTalent)
  .post(talentController.createTalent);

module.exports = router;
