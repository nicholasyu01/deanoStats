const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Game = new Schema({
    weekNumber: Number,
    date: String,
    day: String,
    time: String,
    homeTeamId: String,
    homeTeamName: String,
    homePoints: Number,
    homeRY: Number,
    homePY: Number,
    homeSacks: Number,
    homeTO: Number,
    homeSpread: Number,
    awayTeamId: String,
    awayTeamName: String,
    awayPoints: Number,
    awayRY: Number,
    awayPY: Number,
    awaySacks: Number,
    awayTO: Number,
    awaySpread: Number,
    overUnder: Number,
});

module.exports = mongoose.model('Game', Game);