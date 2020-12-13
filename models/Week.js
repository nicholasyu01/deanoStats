const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Week = new Schema({
    weekNumber: {
        type: Number
    }
});

module.exports = mongoose.model('Week', Week);