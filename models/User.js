const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: 'Number',
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('users', userSchema);