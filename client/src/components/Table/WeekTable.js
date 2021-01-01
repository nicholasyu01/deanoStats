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

export default function WeekTable(props) {
    const { weekData } = props;
    const classes = useStyles(styles);

    //TODO make the table more module to be used by any data
    return (
        <div className={classes.container} style={{ overflowX: "auto" }}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.border} padding="none">Date</TableCell>
                        <TableCell className={classes.border} padding="none">Day</TableCell>
                        <TableCell className={classes.border} padding="none">Time</TableCell>
                        <TableCell className={classes.border} padding="none">Home</TableCell>
                        <TableCell className={classes.border} padding="none">Away</TableCell>
                        <TableCell className={classes.border} padding="none">Home Points</TableCell>
                        <TableCell className={classes.border} padding="none">Away Points</TableCell>
                        <TableCell className={classes.border} padding="none">Home Spread</TableCell>
                        <TableCell className={classes.border} padding="none">Away Spread</TableCell>
                        <TableCell className={classes.border} padding="none">Over Under</TableCell>
                        <TableCell className={classes.border} padding="none">Home Rush Yards</TableCell>
                        <TableCell className={classes.border} padding="none">Home Pass Yards</TableCell>
                        <TableCell className={classes.border} padding="none">Away Rush Yards</TableCell>
                        <TableCell className={classes.border} padding="none">Away Pass Yards</TableCell>
                        <TableCell className={classes.border} padding="none">Home Sacks</TableCell>
                        <TableCell className={classes.border} padding="none">Away Sacks</TableCell>
                        <TableCell className={classes.border} padding="none">Home Intercp Thrown</TableCell>
                        <TableCell className={classes.border} padding="none">Home Fumbles</TableCell>
                        <TableCell className={classes.border} padding="none">Away Intercep Thrown</TableCell>
                        <TableCell className={classes.border} padding="none">Away Fumbles</TableCell>
                        <TableCell className={classes.border} padding="none"></TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {weekData?.games.map((row, key) => (
                        <TableRow key={key}>
                            <TableCell className={classes.border} padding="none">{row.date}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.day}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.time}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.homeTeamName}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.awayTeamName}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.homePoints}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.awayPoints}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.homeSpread}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.awaySpread}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.overUnder}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.homeRY}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.homePY}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.awayRY}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.awayPY}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.homeSacks}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.awaySacks}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.homeIT}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.homeFumbles}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.awayIT}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.awayFumbles}</TableCell>
                            <TableCell className={classes.border} padding="none"></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

// MyTable.propTypes = {
//     weekData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
// };
