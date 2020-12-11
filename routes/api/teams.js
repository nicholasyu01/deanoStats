const express = require("express");
const router = express.Router();

// Load Team model
const Team = require('../../models/Team');

//GET all todos
router.get("/", (req, res) => {
    console.log("GET all teams");
    Team.find(function(err, team) {
        if (err) {
            console.log(err);
        } else {
            res.json(team);
        }
    });
});
//GET a todo
router.route('/:id').get(function(req, res) {
    console.log("GET team call");
    let id = req.params.id;
    Team.findById(id, function(err, team) {
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


module.exports = router;
