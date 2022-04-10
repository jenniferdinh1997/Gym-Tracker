const Workout = require('../models/workout');

module.exports = {
    index,
    show,
    showForm,
    create
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
    res.render('workout/exercise',
    {
        title: 'Add Exercise'
    })
}

function create(req,res) {
    Workout.create(req.body, function(err,workout) {
        res.redirect(`workout/new`);
    })
}
