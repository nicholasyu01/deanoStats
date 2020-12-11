const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Team = new Schema({
    teamName: {
        type: String
    },
    teamDivision: {
        type: String
    }
});

module.exports = mongoose.model('Team', Team);