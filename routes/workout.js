const express = require('express');
const router = express.Router();
const workoutCtrl = require('../controllers/workout');
const isLoggedIn = require('../config/auth');

//localhost:3000/workout
router.get('/new', isLoggedIn, workoutCtrl.index);
router.post('/', workoutCtrl.new);
router.get('/finish', workoutCtrl.finish);
router.get('/history', workoutCtrl.pastIndex);
router.get('/:id', workoutCtrl.show);
router.delete('/:id', workoutCtrl.delete);

module.exports = router;