const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    bodyPart: {
        type: String,
        enum: ['Back', 'Biceps', 'Triceps', 'Shoulders', 'Chest', 'Legs', 'Cardio']
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

const workoutSchema = new Schema ({
    date: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    exercise: [exerciseSchema],
    rating: {
        type: Number,
        min: 1,
        max: 5
    }
})
module.exports = mongoose.model('Workout', workoutSchema);