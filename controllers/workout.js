const Workout = require('../models/workout');

module.exports = {
    index,
    new: newWorkout,
    finish,
    pastIndex,
    show,
    delete: deleteWorkout
}

function index(req,res) {
    res.render('workout/new',
    {
        title: 'Start Workout'
    })
}

function newWorkout(req,res) {
    const d = req.body.date;
    req.body.date = `${d.substr(5, 2)}-${d.substr(8, 2)}-${d.substr(0, 4)}`;
    const workout = new Workout(req.body);
    workout.save(function(err) {
        res.redirect('/workout/finish');
    })
}

function finish (req,res) {
    res.render('workout/finish',
    {
        title: 'Workout Completed!'
    })
}

function pastIndex(req,res) {
    Workout.find({}, function(err, workout) {
        res.render('workout/history',
        {
            title: 'History',
            workout
        })
    })
}

function show(req,res) {
    Workout.findById(req.params.id, function(err, workout) {
        res.render('workout/show',
        {
            title: 'Workout Details',
            workout
        });
    })
}

function deleteWorkout(req,res) {
    Workout.findByIdAndDelete(req.params.id, function(err, workout) {
        res.redirect('/workout/history');
    })
}