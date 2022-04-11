const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    bodyPart: {
        type: String,
        enum: ['Back', 'Biceps', 'Triceps', 'Shoulders', 'Chest', 'Legs', 'Abs', 'Cardio']
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
})

const templateSchema = new Schema ({
    name: {
        type: String
    },
    exercise: [exerciseSchema] // one template contains many exercises
})

module.exports = mongoose.model('Template', templateSchema);