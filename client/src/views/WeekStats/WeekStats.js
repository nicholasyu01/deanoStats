import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

// import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
// import CardAvatar from "components/Card/CardAvatar.js";
import CardFooter from "components/Card/CardFooter.js";

import TextField from '@material-ui/core/TextField';

import axios from 'axios';

import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';

import MyTable from "components/Table/MyTable.js";

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

export default function WeekStats() {
  const classes = useStyles();

  const onSubmit = (event) => {
    event.preventDefault()
    const data = {
      weekNumber: 1 + parseInt(week, 10),
      games: {
        gameNumber: event.target.gameNumber.value,
        homePoints: event.target.homePoints.value,
        homeRY: event.target.homeRY.value,
        homePY: event.target.homePY.value,
        homeSacks: event.target.homeSacks.value,
        homeTO: event.target.homeTO.value,
        homeSpread: event.target.homeSpread.value,
        awayPoints: event.target.awayPoints.value,
        awayRY: event.target.awayRY.value,
        awayPY: event.target.awayPY.value,
        awaySacks: event.target.awaySacks.value,
        awayTO: event.target.awayTO.value,
        awaySpread: event.target.awaySpread.value,

      }
    }
    console.log(data);
    axios.post('/api/weeks/update/' + weeks[week]?._id, data)
      .then(response =>
        updateWeeks()
      )
      .catch((err) => console.log(err));
  }

  const [weeks, setWeeks] = useState([{ weekNumber: '' }]);
  const [week, setWeek] = useState();

  const setWeekNumber = (event) => {
    setWeek(event.target.value);
  }

  const [state, setState] = useState({
    age: 'age',
    name: '3',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  function updateWeeks() {
    axios.get('/api/weeks')
      .then(w => {
        setWeeks(w.data);
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
  }, []);

  const print = (event) => {
    console.log(weeks)
    console.log(week)
    console.log(weeks[week]?._id)
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <form onSubmit={onSubmit}>
          <Card>
            <CardBody>
              <div className={classes.typo}>
                <h3><b>Week Stats</b> week: {weeks[week]?.weekNumber}</h3>
              </div>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Week</InputLabel>
                <Select
                  native
                  // value={state.name} //sets which state is displayed
                  onChange={setWeekNumber}
                  inputProps={{
                    // name: 'name', //sets which state is changed
                    id: 'age-native-simple',
                  }}
                >
                  <option aria-label="None" />
                  {weeks?.map((number, key) => (
                    <option key={key} value={key}>{number.weekNumber}</option>
                  ))}
                </Select>
                {/* <Button onClick={print} variant="contained" >print</Button> */}
              </FormControl>
              {/* <Table
                tableHeaderColor="info"
                tableHead={["GameId", "weekNumber", "City", "Salary"]}
                tableData={[
                  ["Dakota Rice", , "Oud-Turnhout", "$36,738"],
                  ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                  ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"]
                ]}
              /> */}
              <MyTable
                weekData={weeks[week]}
              />
              <div className={classes.typo}>
                <h3>Enter Game</h3>
              </div>
              <div className={classes.row}>
                <div className={classes.column}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Home</InputLabel>
                    <Select
                      native
                      value={state.age}
                      onChange={handleChange}
                      inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                      }}
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
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
                  <TextField
                    className={classes.formControl}
                    id="gameNumber"
                    label="game number"
                    type="number"
                  />
                </div>
                <div className={classes.column}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Away</InputLabel>
                    <Select
                      native
                      value={state.age}
                      onChange={handleChange}
                      inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                      }}
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
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
            </CardBody>
            <CardFooter>
              <Button type="submit" color="info">Update Profile</Button>
            </CardFooter>
          </Card>
        </form>
      </GridItem>
    </GridContainer>
  );
}
