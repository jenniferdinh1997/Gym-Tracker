const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    template: {
        type: Schema.Types.ObjectId, ref: 'Template' // a workout uses one template
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    }},
    {timestamps: true})

module.exports = mongoose.model('Workout', workoutSchema);