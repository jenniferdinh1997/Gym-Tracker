const Workout = require('../models/workout');

module.exports = {
    create
}

function create(req,res) {
    Workout.findById(req.params.id, function(err,workout) {
        workout.exercises.push(req.body);
        console.log(workout);
        workout.save(function(err) {
            res.redirect(`workout/${workout._id}`);
        })
    })
}