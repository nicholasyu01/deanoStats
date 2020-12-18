const express = require("express");
const router = express.Router();

// Load Team model
const Game = require('../../models/Game');

//GET all todos
router.get("/", (req, res) => {
    console.log("GET all games");
    Game.find(function(err, game) {
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
        gameNumber: req.body.gameNumber
    });
    game
        .save()
        .then(game => res.json(game))
        .catch(err => console.log(err));
});


module.exports = router;
