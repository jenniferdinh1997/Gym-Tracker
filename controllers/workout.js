const Workout = require('../models/workout');

module.exports = {
    index,
    show,
    finish
}

function index(req,res) {
    res.render('workout/index', 
    {
        title: 'Choose a Template'
    });
}

function show(req,res) {
    res.render('workout/start',
    {
        title: 'Start Workout'
    })
}

function finish(req,res) {
    res.redirect('/workout/finish',
    {
        title: 'Workout Completed!'
    });
}
