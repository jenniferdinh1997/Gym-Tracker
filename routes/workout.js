const express = require('express');
const router = express.Router();
const workoutCtrl = require('../controllers/workout');

//localhost:3000/workout
router.get('/', workoutCtrl.index);

module.exports = router;