import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

const TableComponent = ({ diseases, data }) => {

    const classes = useStyles()

    return (
        <div style={{ padding: '20px' }}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell> Nr </TableCell>
                    {diseases[0].split(';').map( (value, index) => (
                        <TableCell key={index}> {value} </TableCell>
                    ))}
                    <TableCell> Cel nauki </TableCell>
                    <TableCell> Nauczono </TableCell>
                    <TableCell> Poprawność procesu nauczania </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell> # </TableCell>
                    {diseases[1].split(';').map( (value, index) => (
                        <TableCell key={index}> {value} </TableCell>
                    ))}
                    <TableCell> # </TableCell>
                    <TableCell> # </TableCell>
                    <TableCell> # </TableCell>
                </TableRow>
                {diseases.map( (symptoms, index) => {
                    if (index >= 2) {
                        return (
                            <TableRow key={index}>
                                <TableCell> { index - 1 } </TableCell>
                                {symptoms.split(';').map( (symptom, index2) => (
                                    <TableCell key={index2}> {symptom} </TableCell>
                                ))}
                                <TableCell> {data[index - 2].target.map( (value, index2) => (
                                  <span key={index2} style={{ display: 'block' }}> {value} </span>
                                ))} </TableCell>
                                <TableCell> {data[index - 2].learning_success.map( (value, index2) => (
                                  <span key={index2} style={{ display: 'block' }}> {value} </span>
                                ))} </TableCell>
                                <TableCell> {Number(data[index - 2].average_learning_rate).toFixed(2)}% </TableCell>
                            </TableRow>
                        )
                    }
                    else return null
                })}
                </TableBody>
            </Table>
          </TableContainer>
        </div>
    )
}

export default React.memo(TableComponent)