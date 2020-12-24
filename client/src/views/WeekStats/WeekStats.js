import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import WeekTable from "components/Table/WeekTable.js";
import { Test } from "components/api/api.js"

const styles = theme => ({
  formControl: {
    minWidth: 120,
    margin: '5px'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
});

const useStyles = makeStyles(styles);

//TODO clear form after submition
export default function WeekStats() {
  const classes = useStyles();

  const onSubmit = (event) => {
    event.preventDefault()
    const data = {
      weekNumber: 1 + parseInt(week, 10),
      date: event.target.date.value,
      day: event.target.day.value,
      time: event.target.time.value,
      homeTeamId: teams[homeTeam]._id,
      homeTeamName: teams[homeTeam].teamName,
      homePoints: event.target.homePoints.value,
      homeRY: event.target.homeRY.value,
      homePY: event.target.homePY.value,
      homeSacks: event.target.homeSacks.value,
      homeTO: event.target.homeTO.value,
      homeSpread: event.target.homeSpread.value,
      awayTeamId: teams[awayTeam]._id,
      awayTeamName: teams[awayTeam].teamName,
      awayPoints: event.target.awayPoints.value,
      awayRY: event.target.awayRY.value,
      awayPY: event.target.awayPY.value,
      awaySacks: event.target.awaySacks.value,
      awayTO: event.target.awayTO.value,
      awaySpread: event.target.awaySpread.value,
      overUnder: event.target.overUnder.value,
    }
    axios.post('/api/games/add/', data)
      .then(game => {
        //TODO only put gameId in games array to lessen duplicate data
        // const gameId = {
        //   gameId: game.data._id
        // }
        var total = parseInt(game.data.homePoints, 10) + parseInt(game.data.awayPoints, 10);
        var homeDiff = parseInt(game.data.homePoints, 10) - parseInt(game.data.awayPoints, 10);
        var awayDiff = parseInt(game.data.awayPoint, 10) - parseInt(game.data.homePoints, 10);
        const homeTeamData = {
          gameId: game.data._id,
          weekNumber: game.data.weekNumber,
          date: game.data.date,
          day: game.data.day,
          time: game.data.time,
          team: teams[homeTeam].teamName,
          opposingteam: teams[awayTeam].teamName,
          location: "Home",
          teamScore: game.data.homePoints,
          opposingScore: game.data.awayPoints,
          spread: game.data.homeSpread,
          gameResult: parseInt(game.data.homePoints, 10) > parseInt(game.data.awayPoints, 10) ? "Win" : "Loss",
          spreadResult: homeDiff > game.data.homeSpread ? "Win" : "Loss",
          totalPoints: parseInt(game.data.homePoints, 10) + parseInt(game.data.awayPoints, 10),
          overUnder: game.data.overUnder,
          overUnderResult: total > parseInt(game.data.overUnder, 10) ? "Win" : "Loss",
          stadiumType: teams[homeTeam].stadiumType,
          fieldType: teams[homeTeam].fieldType,
        }
        const awayTeamData = {
          gameId: game.data._id,
          weekNumber: game.data.weekNumber,
          date: game.data.date,
          day: game.data.day,
          time: game.data.time,
          team: teams[awayTeam].teamName,
          opposingteam: teams[homeTeam].teamName,
          location: "Away",
          teamScore: game.data.awayPoints,
          opposingScore: game.data.homePoints,
          spread: game.data.homeSpread,
          gameResult: parseInt(game.data.homePoints, 10) < parseInt(game.data.awayPoints, 10) ? "Win" : "Loss",
          spreadResult: awayDiff > game.data.awaySpread ? "Win" : "Loss",
          totalPoints: parseInt(game.data.homePoints, 10) + parseInt(game.data.awayPoints, 10),
          overUnder: game.data.overUnder,
          overUnderResult: total > parseInt(game.data.overUnder, 10) ? "Win" : "Loss",
          stadiumType: teams[homeTeam].stadiumType,
          fieldType: teams[homeTeam].fieldType,
        }
        axios.put('/api/weeks/put/' + weeks[week]?._id, game.data)
          .then(
            updateWeeks()
          )
          .catch((err) => console.log(err))
        axios.put('/api/teams/put/' + teams[homeTeam]._id, homeTeamData)
          .then()
          .catch((err) => console.log(err))
        axios.put('/api/teams/put/' + teams[awayTeam]._id, awayTeamData)
          .then()
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err));

  }

  const [weeks, setWeeks] = useState([]);
  const [week, setWeek] = useState();
  const [teams, setTeams] = useState([])
  const [homeTeam, setHomeTeam] = useState();
  const [awayTeam, setAwayTeam] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  const setWeekNumber = (event) => {
    setWeek(event.target.value);
    if (event.target.value.length === 0)
      setIsDisabled(true);
    else
      setIsDisabled(false);
  }

  const handleHomeTeam = (event) => {
    setHomeTeam(event.target.value);
  }

  const handleAwayTeam = (event) => {
    setAwayTeam(event.target.value);
  }

  function updateWeeks() {
    axios.get('/api/weeks')
      .then(w => {
        setWeeks(w.data);
        // document.getElementById("gameForm").reset();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    axios.get('/api/weeks')
      .then(w => {
        setWeeks(w.data);
      })
      .catch(function (error) {
        console.log(error);
      })
    axios.get('/api/teams/teamNames')
      .then(teams => {
        setTeams(teams.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  function print() {
    console.log(weeks)
    console.log(week)
    console.log(weeks[week]?._id)
    Test()

  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <div className={classes.typo}>
              <h3><b>Week Stats</b> week: {weeks[week]?.weekNumber}</h3>
            </div>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Week</InputLabel>
              <Select
                native
                onChange={setWeekNumber}
              >
                <option aria-label="None" />
                {weeks?.map((number, key) => (
                  <option key={number._id} value={key}>{number?.weekNumber}</option>
                ))}
              </Select>
              <Button onClick={print} variant="contained" >print</Button>
            </FormControl>
            <WeekTable
              weekData={weeks[week]}
            />
            <div className={classes.typo}>
              <h3>Enter Game</h3>
            </div>
            <form onSubmit={onSubmit} id="gameForm">
              <div className={classes.row}>
                <div className={classes.column}>
                  <div className={classes.row}>
                    <TextField
                      className={classes.formControl}
                      id="date"
                      label="Date"
                    />
                    <TextField
                      className={classes.formControl}
                      id="day"
                      label="Day"
                    />
                    <TextField
                      className={classes.formControl}
                      id="time"
                      label="Time"
                    />
                  </div>
                  <TextField
                    className={classes.formControl}
                    id="overUnder"
                    label="Over Under"
                    type="number"
                  />
                </div>
                <div className={classes.column}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Home Team</InputLabel>
                    <Select
                      required
                      native
                      onChange={handleHomeTeam}
                    >
                      <option aria-label="None" />
                      {teams?.map((number, key) => (
                        <option key={number._id} value={key}>{number?.teamName}</option>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    className={classes.formControl}
                    id="homePoints"
                    label="Points"
                    type="number"
                  />
                  <TextField
                    className={classes.formControl}
                    id="homeRY"
                    label="Rushing Yards"
                    type="number"
                  />
                  <TextField
                    className={classes.formControl}
                    id="homePY"
                    label="Passing Yards"
                    type="number"
                  />
                  <TextField
                    className={classes.formControl}
                    id="homeSacks"
                    label="Sacks"
                    type="number"
                  />
                  <TextField
                    className={classes.formControl}
                    id="homeTO"
                    label="Turn Overs"
                    type="number"
                  />
                  <TextField
                    className={classes.formControl}
                    id="homeSpread"
                    label="Home Spread"
                    type="number"
                  />

                </div>
                <div className={classes.column}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Away Team</InputLabel>
                    <Select
                      required
                      native
                      onChange={handleAwayTeam}
                    >
                      <option aria-label="None" />
                      {teams?.map((number, key) => (
                        <option key={number._id} value={key}>{number?.teamName}</option>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    className={classes.formControl}
                    id="awayPoints"
                    label="Points"
                    type="number"
                  />
                  <TextField
                    className={classes.formControl}
                    id="awayRY"
                    label="Rushing Yards"
                    type="number"
                  />
                  <TextField
                    className={classes.formControl}
                    id="awayPY"
                    label="Passing Yards"
                    type="number"
                  />
                  <TextField
                    className={classes.formControl}
                    id="awaySacks"
                    label="Sacks"
                    type="number"
                  />
                  <TextField
                    className={classes.formControl}
                    id="awayTO"
                    label="Turn Overs"
                    type="number"
                  />
                  <TextField
                    className={classes.formControl}
                    id="awaySpread"
                    label="Away Spread"
                    type="number"
                  />
                </div>
              </div>
              <Button disabled={isDisabled} type="submit" color="info">Update Profile</Button>
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
