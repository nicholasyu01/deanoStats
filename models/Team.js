const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Team = new Schema({
    teamName: String,
    teamDivision: String,
    games: []
});

module.exports = mongoose.model('Team', Team);