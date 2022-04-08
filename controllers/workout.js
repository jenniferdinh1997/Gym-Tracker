const Workout = require('../models/workout');

module.exports = {
    index,
    show,
    showForm
}

function index(req,res) {
    res.render('workout/index', 
    {
        title: 'Choose a Template'
    });
}

function show(req,res) {
    res.render('workout/new',
    {
        title: 'Create New Template'
    })
}

function showForm(req,res) {
    res.render('workout/:id/exercise')
}