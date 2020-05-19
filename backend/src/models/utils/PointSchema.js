const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        require: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    },
});

    module.exports = PointSchema; 
