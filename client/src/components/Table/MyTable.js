import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import Button from "components/CustomButtons/Button.js";


// const useStyles = makeStyles();

export default function MyTable(props) {
    const { weekData } = props;
    // const classes = useStyles();

    const print = (event) => {
        console.log(weekData)
    }

    //TODO make the table more module to be used by any data
    return (
        <div>
            <Table size="small" >
                <TableHead>
                    <TableRow>
                        <TableCell>Game Number</TableCell>
                        <TableCell align="right">{weekData?.weekNumber}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {weekData?.games.map((row, key) => (
                        <TableRow key={row.gameNumber}>
                            <TableCell component="th" scope="row">
                                {row.gameNumber}
                            </TableCell>
                            <TableCell align="right">{row.gameNumber}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Button onClick={print} variant="contained" >print</Button>
        </div>
    );
}

// MyTable.propTypes = {
//     weekData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
// };
