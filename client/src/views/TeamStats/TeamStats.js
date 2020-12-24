import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TeamTable from "components/Table/TeamTable.js";

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

export default function TeamStats() {
    const classes = useStyles();

    const [teams, setTeams] = useState([])
    const [team, setTeam] = useState();

    const handleTeam = (event) => {
        setTeam(event.target.value);
    }

    useEffect(() => {
        axios.get('/api/teams')
            .then(teams => {
                setTeams(teams.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardBody>
                        <div className={classes.typo}>
                            <h3><b>Team Stats</b> team: {teams[team]?.teamName}</h3>
                        </div>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Home Team</InputLabel>
                            <Select
                                required
                                native
                                onChange={handleTeam}
                            >
                                <option aria-label="None" />
                                {teams?.map((number, key) => (
                                    <option key={number._id} value={key}>{number?.teamName}</option>
                                ))}
                            </Select>
                        </FormControl>
                        <TeamTable
                            weekData={teams[team]}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}
