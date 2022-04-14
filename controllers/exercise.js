const Workout = require('../models/workout');

module.exports = {
    create,
    edit
}

function create(req,res) {
    Workout.findById(req.params.id, function(err,workout) {
        workout.exercises.push(req.body);
        console.log(workout);
        workout.save(function(err) {
            res.render('workout/show',
            {
                title: 'Workout Details',
                workout
            });
        })
    })
}

function edit(req,res) {
    Workout.findById(req.params.id, function(err,workout) {
        res.render('workout/edit',
        {
            title: 'Edit Workout',
            workout
        });
    })
}