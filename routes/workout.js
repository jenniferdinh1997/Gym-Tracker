const express = require('express');
const router = express.Router();
const workoutCtrl = require('../controllers/workout');

//localhost:3000/workout
router.get('/new', workoutCtrl.index);
router.post('/', workoutCtrl.new);
router.get('/finish', workoutCtrl.finishPage);
router.get('/history', workoutCtrl.pastIndex);
router.delete('/history', workoutCtrl.delete);
router.get('/:id', workoutCtrl.show);

module.exports = router;