const History = require('../models/workout');

module.exports = {
    index
}

function index(req,res) {
    res.render('history/index',
    {
        title: 'Past Workouts'
    })
}