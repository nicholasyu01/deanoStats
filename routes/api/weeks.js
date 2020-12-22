const express = require("express");
const router = express.Router();

// Load Team model
const Week = require('../../models/Week');

//GET all todos
router.get("/", (req, res, next) => {
    console.log("GET all week");
    var query = Week.find({}).select({});

    query.exec(function (err, someValue) {
        if (err) 
            return next(err);
        res.send(someValue);
    });
    
    // Week.find({ weekNumber: 0}, function (err, week) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         res.json(week);
    //     }
    // });
});


// //GET a todo
router.route('/:id').get(function (req, res) {
    console.log("GET week");
    let id = req.params.id;
    Week.findById(id, function (err, week) {
        res.json(week);
    });
});

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

//add game to week
router.route('/update/:id').post(function (req, res) {
    Week.findById(req.params.id, function (err, week) {
        if (!week) {
            res.status(404).send("data is not found");
        } else {
            week.weekNumber = req.body.weekNumber;
            week.games.push(req.body.games);
            week.save().then(week => {
                res.status(200).json(week);
            })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        }
    });
});


module.exports = router;
