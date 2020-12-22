const express = require("express");
const router = express.Router();

// Load Team model
const Team = require('../../models/Team');

//GET all todos
router.get("/", (req, res) => {
    console.log("GET all teams");
    Team.find(function (err, team) {
        if (err) {
            console.log(err);
        } else {
            res.json(team);
        }
    });
});

//GET all teams without games
router.get("/teamNames", (req, res, next) => {
    var query = Team.find({}).select({'games': 0});

    query.exec(function (err, someValue) {
        if (err) 
            return next(err);
        res.send(someValue);
    });
});

//GET a todo
router.route('/:id').get(function (req, res) {
    console.log("GET team call");
    let id = req.params.id;
    Team.findById(id, function (err, team) {
        res.json(team);
    });
});
//POST new todo
router.post("/add", (req, res) => {
    const newTeam = new Team({
        teamName: req.body.teamName,
        teamDivision: req.body.teamDivision
    });
    newTeam
        .save()
        .then(team => res.json(team))
        .catch(err => console.log(err));
});

//ADD a game to a team
router.route('/update/:id').post(function (req, res) {
    Team.findById(req.params.id, function (err, team,) {
        if (!team) {
            res.status(404).send("data is not found");
        } else {
            team.teamName = req.body.teamName;
            team.teamDivision = req.body.teamDivision;
            team.games.push(req.body.games);

            team.save().then(team => {
                res.status(200).json(team);
            })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        }
    });
});


module.exports = router;
