import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
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

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  formControl: {
    minWidth: 120
  },
};

const useStyles = makeStyles(styles);

export default function WeekStats() {
  const classes = useStyles();

  const onSubmit = (event) => {
    event.preventDefault()

    const data = {
      weekNumber: event.target.weekNumber.value,
    }

    console.log(data);
    axios.post('/api/weeks/add', data)
      .then(response => console.log(response))
      .catch((err) => console.log(err));
  }



  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  useEffect(() => {
    axios.get('/api/weeks')
      .then()
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <form onSubmit={onSubmit}>
          <Card>
            <CardBody>
              <div className={classes.typo}>
                <h3>Week Stats</h3>
              </div>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Week</InputLabel>
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
              <Table
                tableHeaderColor="primary"
                tableHead={["Name", "Country", "City", "Salary"]}
                tableData={[
                  ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                  ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                  ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"]
                ]}
              />
              <div className={classes.typo}>
                <h3>Enter Game</h3>
              </div>
              <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
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
                  id="weekNumber"
                  label="weekNumber"
                />
                <TextField
                  id="title"
                  label="Home pts"
                />
                <TextField
                  id="title"
                  label="Away pts"
                />
                <TextField
                  id="title"
                  label="Home spread"
                />
                <TextField
                  id="title"
                  label="Away spread"
                />
                <TextField
                  id="title"
                  label="Under Over"
                />
                <TextField
                  id="title"
                  label="Home pass (offense)"
                />
                <TextField
                  id="title"
                  label="Home rush (offense)"
                />
                <TextField
                  id="title"
                  label="Away pass (offense)"
                />
                <TextField
                  id="title"
                  label="Away rush (offense)"
                />
                <TextField
                  id="title"
                  label="Home sacked"
                />
                <TextField
                  id="title"
                  label="Away sacked"
                />
                <TextField
                  id="title"
                  label="Home turn overs"
                />
                <TextField
                  id="title"
                  label="Away turn overs"
                />
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
