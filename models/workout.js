const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    exerciseName: {
        type: String
    },
    bodyPart: {
        type: String,
        enum: ['Back', 'Biceps', 'Triceps', 'Shoulders', 'Chest', 'Legs', 'Abs', 'Cardio']
    },
    reps: {
        type: String
    },
    weight: {
        type: String
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    }
})

const workoutSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    userName: {
        type: String
    },
    userAvatar: {
        type: String
    },
    workoutName: {
        type: String
    },
    date: {
        type: Date
    },
    exercises: [exerciseSchema]
})

module.exports = mongoose.model('Workout', workoutSchema);