const express = require('express');
const router = express.Router();
const exerciseCtrl = require('../controllers/exercise');

//localhost:3000
router.post('/workout/:id/exercise', exerciseCtrl.create);

module.exports = router;