const Template = require('../models/template');

module.exports = {
    show,
    addEx,
    createEx
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

function createEx(req,res) {
    const template = new Template(req.body);
    console.log(req.body);
    template.exercise.push(req.body);
    template.save(function(err) {
        console.log(template.exercise);
        res.redirect('/workout/new');
    })
}