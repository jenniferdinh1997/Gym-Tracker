const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    workoutName: {
        type: String
    },
    date: {
        type: Date
    },
    exerciseName: {
        type: Array
    },
    bodyPart: {
        type: Array
    //     enum: ['Back', 'Biceps', 'Triceps', 'Shoulders', 'Chest', 'Legs', 'Abs', 'Cardio']
    },
    reps: {
        type: Array
    },
    weight: {
        type: Array
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    }
})

module.exports = mongoose.model('Workout', workoutSchema);