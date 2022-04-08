const express = require('express');
const router = express.Router();
const workoutCtrl = require('../controllers/workout');

//localhost:3000/workout
router.get('/', workoutCtrl.index);
router.get('/new', workoutCtrl.show);
router.get('/:id/exercise', workoutCtrl.showForm);

module.exports = router;