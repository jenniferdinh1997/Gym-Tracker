const express = require('express');
const router = express.Router();
const exerciseCtrl = require('../controllers/exercise');

// localhost:3000
router.get('/workout/exercise', exerciseCtrl.show);
router.post('/workout/new', exerciseCtrl.create);

module.exports = router;