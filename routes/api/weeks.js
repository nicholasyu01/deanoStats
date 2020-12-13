const express = require("express");
const router = express.Router();

// Load Team model
const Week = require('../../models/Week');

//GET all todos
router.get("/", (req, res) => {
    console.log("GET all week");
    Week.find(function(err, team) {
        if (err) {
            console.log(err);
        } else {
            res.json(team);
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
    console.log("post week");
    const week = new Week({
        weekNumber: req.body.weekNumber
    });
    week
        .save()
        .then(team => res.json(team))
        .catch(err => console.log(err));
});


module.exports = router;
