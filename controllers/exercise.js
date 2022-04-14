const Workout = require('../models/workout');

module.exports = {
    create,
    delete: deleteItems
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

function deleteItems(req,res) {
    // Workout.findByIdAndDelete(req.params.id, function(err,workout) {
    //     res.redirect(`workout/${workout._id}`)
    // })
    console.log('delete method');
    Workout.findOne({'exercises._id': req.params.id}, function(err, workout) {
        console.log('workout found', workout)
        const exercise = workout.exercises.id(req.params.id)
        exercise.remove()
        workout.save(function(err) {
            res.redirect(`workout/${workout._id}`)
        })
    })
}