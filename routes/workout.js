const express = require('express');
const router = express.Router();
const workoutCtrl = require('../controllers/workout');

//localhost:3000/workout
router.get('/new', workoutCtrl.index);
router.post('/', workoutCtrl.new);
router.get('/finish', workoutCtrl.finish);
router.get('/history', workoutCtrl.pastIndex);
router.get('/:id', workoutCtrl.show);
router.delete('/:id', workoutCtrl.delete);

module.exports = router;