const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Week = new Schema({
    weekNumber: Number,
    games:[]
});

module.exports = mongoose.model('Week', Week);