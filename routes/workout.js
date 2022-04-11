const express = require('express');
const router = express.Router();
const workoutCtrl = require('../controllers/workout');
const exerciseCtrl = require('../controllers/exercise');

//localhost:3000/workout
router.get('/', workoutCtrl.index);
router.get('/new', workoutCtrl.show);
router.get('/exercise', exerciseCtrl.show);
router.post('/new', exerciseCtrl.create);

module.exports = router;