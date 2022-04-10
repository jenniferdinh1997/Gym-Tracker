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

module.exports = mongoose.model('Exercise', exerciseSchema);