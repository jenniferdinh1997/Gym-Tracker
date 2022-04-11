const express = require('express');
const router = express.Router();
const workoutCtrl = require('../controllers/workout');

//localhost:3000/workout
router.get('/', workoutCtrl.index);
router.get('/start', workoutCtrl.show);
router.post('/finish', workoutCtrl.finish);

module.exports = router;