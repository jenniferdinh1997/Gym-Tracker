const express = require('express');
const router = express.Router();
const templateCtrl = require('../controllers/template');

//localhost:3000
router.get('/workout/new', templateCtrl.show);
router.post('/workout/new', templateCtrl.createEx);
router.post('/workout', templateCtrl.add);

module.exports = router;