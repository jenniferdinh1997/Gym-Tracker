const express = require('express');
const router = express.Router();
const historyCtrl = require('../controllers/history');

//localhost:3000/history
router.get('/', historyCtrl.index);

module.exports = router;