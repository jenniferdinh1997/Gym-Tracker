const Workout = require('../models/workout');

module.exports = {
    create
}

function create(req,res) {
    Workout.findById(req.params.id, function(err,workout) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        workout.exercises.push(req.body);
        workout.save(function(err) {
            res.render('workout/show',
            {
                title: 'Workout Details',
                workout
            });
        })
    })
}