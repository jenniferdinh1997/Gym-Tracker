const Workout = require('../models/workout');

module.exports = {
    index
}

function index(req,res) {
    res.render('workout/index', 
    {
        title: 'Choose a Template'
    });
}
