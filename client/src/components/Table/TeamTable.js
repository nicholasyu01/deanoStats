import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

const styles = theme => ({
    border: {
        [theme.breakpoints.down('md')]: {
            borderTop: 0,
            borderLeft: 1,
            borderRight: 0,
            boarderColor: 'black',
            borderStyle: 'solid',
        },
        padding: "5px"
    },
    container: {
        padding: "5px",
    }
});
const useStyles = makeStyles(styles);

export default function TeamTable(props) {
    const { teamData } = props;
    const classes = useStyles(styles);

    //TODO make the table more module to be used by any data
    return (
        <div className={classes.container} style={{ overflowX: "auto" }}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.border} padding="none">Week</TableCell>
                        <TableCell className={classes.border} padding="none">Date</TableCell>
                        <TableCell className={classes.border} padding="none">Day</TableCell>
                        <TableCell className={classes.border} padding="none">Time</TableCell>
                        <TableCell className={classes.border} padding="none">Team</TableCell>
                        <TableCell className={classes.border} padding="none">Location</TableCell>
                        <TableCell className={classes.border} padding="none">{teamData?.teamName}</TableCell>
                        <TableCell className={classes.border} padding="none">Opponent</TableCell>
                        <TableCell className={classes.border} padding="none">Game Result</TableCell>
                        <TableCell className={classes.border} padding="none">Spread</TableCell>
                        <TableCell className={classes.border} padding="none">Spread Result</TableCell>
                        <TableCell className={classes.border} padding="none">Total Points</TableCell>
                        <TableCell className={classes.border} padding="none">Over/Under</TableCell>
                        <TableCell className={classes.border} padding="none">Ov/Un Result</TableCell>
                        <TableCell className={classes.border} padding="none">Stadium</TableCell>
                        <TableCell className={classes.border} padding="none">Field</TableCell>
                        <TableCell className={classes.border} padding="none"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {teamData?.games.map((row, key) => (
                        <TableRow key={key}>
                            <TableCell className={classes.border} padding="none">{row.weekNumber}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.date}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.day}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.time}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.opposingTeam}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.location}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.teamScore}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.opposingScore}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.gameResult}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.spread}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.spreadResult}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.totalPoints}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.overUnder}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.overUnderResult}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.stadiumType}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.fieldType}</TableCell>
                            <TableCell className={classes.border} padding="none"></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

// MyTable.propTypes = {
//     teamData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
// };
