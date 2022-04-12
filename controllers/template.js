const Template = require('../models/template');

module.exports = {
    show,
    createEx,
    add
}

function show(req,res) {
    Template.find({}, function(err, templates) {
        res.render('workout/new',
        {
            title: 'Create New Template',
            templates
        })
    })
}

function createEx(req,res) {
    Template.create(req.body, function(err, templates) {
        res.redirect('/workout/new');
    })
}

function add(req,res) {
    Template.create(req.body, function(err, templates) {
        console.log(req.body);
        res.redirect('/workout');
    })
}