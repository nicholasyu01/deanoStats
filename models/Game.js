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
    homeIT: Number,
    homeFumbles: Number,
    homeSpread: Number,
    awayTeamId: String,
    awayTeamName: String,
    awayPoints: Number,
    awayRY: Number,
    awayPY: Number,
    awaySacks: Number,
    awayIT: Number,
    awayFumbles: Number,
    awaySpread: Number,
    overUnder: Number,
});

module.exports = mongoose.model('Game', Game);