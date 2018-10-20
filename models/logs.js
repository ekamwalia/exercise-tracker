const mongoose = require('mongoose')

let LogsSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
    }
});

const Logs = module.exports = mongoose.model('Logs', LogsSchema)

