const express = require('express');
const router = express.Router();
const templateCtrl = require('../controllers/template');

//localhost:3000
router.get('/workout/new', templateCtrl.show);
router.get('/workout/exercise', templateCtrl.addEx);
// router.post('/workout/new', templateCtrl.createEx);

module.exports = router;