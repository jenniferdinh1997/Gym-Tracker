const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateSchema = new Schema ({
    templateName: {
        type: String,
        required: true
    },
    exerciseName: {
        type: String,
        required: true
    },
    bodyPart: {
        type: String,
        enum: ['Back', 'Biceps', 'Triceps', 'Shoulders', 'Chest', 'Legs', 'Abs', 'Cardio']
    },
    reps: {
        type: Number
    },
    weight: {
        type: Number
    }
})

module.exports = mongoose.model('Template', templateSchema);