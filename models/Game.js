const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Game = new Schema({
    gameNumber: {
        type: Number
    }
});

module.exports = mongoose.model('Game', Game);