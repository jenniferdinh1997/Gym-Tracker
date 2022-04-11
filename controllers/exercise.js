const Exercise = require('../models/exercise');

module.exports = {
    show,
    create
}

function show(req,res) {
    res.render('exercise/new',
    {
        title: 'Add an Exercise',
    })
}

function create(req,res) {
    Exercise.create(req.body, function(err,exercise) {
        console.log(exercise);
        res.redirect('/workout/new');
    })
}