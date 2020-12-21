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
    },
    container: {
        padding: "5px",
    }
});
const useStyles = makeStyles(styles);

export default function MyTable(props) {
    const { weekData } = props;
    const classes = useStyles(styles);

    //TODO make the table more module to be used by any data
    return (
        <div className={classes.container} style={{ overflowX: "auto" }}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.border} padding="none">Game</TableCell>
                        <TableCell className={classes.border} padding="none">homeTeam</TableCell>
                        <TableCell className={classes.border} padding="none">homePoints</TableCell>
                        <TableCell className={classes.border} padding="none">homeRY</TableCell>
                        <TableCell className={classes.border} padding="none">homePY</TableCell>
                        <TableCell className={classes.border} padding="none">homeSacks</TableCell>
                        <TableCell className={classes.border} padding="none">homeTO</TableCell>
                        <TableCell className={classes.border} padding="none">homeSpread</TableCell>
                        <TableCell className={classes.border} padding="none">awayTeam</TableCell>
                        <TableCell className={classes.border} padding="none">awayPoints</TableCell>
                        <TableCell className={classes.border} padding="none">awayRY</TableCell>
                        <TableCell className={classes.border} padding="none">awayPY</TableCell>
                        <TableCell className={classes.border} padding="none">awaySacks</TableCell>
                        <TableCell className={classes.border} padding="none">awayTO</TableCell>
                        <TableCell className={classes.border} padding="none">awaySpread</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {weekData?.games.map((row) => (
                        <TableRow key={row.gameNumber}>
                            <TableCell className={classes.border} padding="none" >{row.gameNumber}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.homeTeamName}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.homePoints}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.homeRY}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.homePY}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.homeSacks}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.homeTO}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.homeSpread}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.awayTeamName}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.awayPoints}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.awayRY}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.awayPY}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.awaySacks}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.awayTO}</TableCell>
                            <TableCell className={classes.border} padding="none">{row.awaySpread}</TableCell>
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
