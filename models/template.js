const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateSchema = new Schema ({
    name: {
        type: String
    },
    exercise: [{
        type: Schema.Types.ObjectId, ref: 'Exercise' // many exercises can belong to many diff templates
    }]

})

module.exports = mongoose.model('Template', templateSchema);