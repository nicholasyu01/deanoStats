const express = require("express");
const router = express.Router();

// Load Team model
const Game = require('../../models/Game');

//GET all todos
router.get("/", (req, res) => {
    console.log("GET all games");
    Game.find(function (err, game) {
        if (err) {
            console.log(err);
        } else {
            res.json(game);
        }
    });
});


// //GET a todo
// router.route('/:id').get(function(req, res) {
//     console.log("GET team call");
//     let id = req.params.id;
//     Team.findById(id, function(err, team) {
//         res.json(team);
//     });
// });

//POST new todo
router.post("/add", (req, res) => {
    console.log("post game");
    const game = new Game({
        weekNumber: req.body.weekNumber,
        date: req.body.date,
        day: req.body.day,
        time: req.body.time,
        homeTeamId: req.body.homeTeamId,
        homeTeamName: req.body.homeTeamName,
        homePoints: req.body.homePoints,
        homeRY: req.body.homeRY,
        homePY: req.body.homePY,
        homeSacks: req.body.homeSacks,
        homeTO: req.body.homeTO,
        homeSpread: req.body.homeSpread,
        awayTeamId: req.body.awayTeamId,
        awayTeamName: req.body.awayTeamName,
        awayPoints: req.body.awayPoints,
        awayRY: req.body.awayRY,
        awayPY: req.body.awayPY,
        awaySacks: req.body.awaySacks,
        awayTO: req.body.awayTO,
        awaySpread: req.body.awaySpread,
        overUnder: req.body.overUnder,
    });
    game
        .save()
        .then(game => res.json(game))
        .catch(err => console.log(err));
});


module.exports = router;
