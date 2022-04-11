const Template = require('../models/template');

module.exports = {
    show,
    addEx,
    // createEx
}

function show(req,res) {
    res.render('workout/new',
    {
        title: 'Create New Template'
    })
}

function addEx(req,res) {
    res.render('exercise/new',
    {
        title: 'Add an Exercise',
    })
}

// function createEx(req,res) {
//     Template.exercise.push(req.body);
//     Template.save(function(err) {
//         res.redirect('/workout/new');
//     })
// }