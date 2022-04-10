const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    date: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    exercise: [{
        type: Schema.Types.ObjectId, ref: 'Exercise' // many workouts can have many diff exercises
    }],
    rating: {
        type: Number,
        min: 1,
        max: 5
    }
})

module.exports = mongoose.model('Workout', workoutSchema);