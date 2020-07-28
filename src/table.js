import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#232C36",
    color: "#53687C",
    fontFamily: "Poppins",
    fontSize: 14,
    fontStyle: "normal",
    alignItems: "center",
    fontWeight: 500,
  },
  body: {
    fontSize: 12,
    color: "#9FAAB6",
    fontFamily: "Poppins",
    fontStyle: "normal",
    alignItems: "center",
    fontWeight: 500,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#232C36",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#29333E",
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>SNo.</StyledTableCell>
            <StyledTableCell align="left">Product Name</StyledTableCell>
            <StyledTableCell align="left">SKU</StyledTableCell>
            <StyledTableCell align="left">S.Price</StyledTableCell>
            <StyledTableCell align="left">MRP</StyledTableCell>
            <StyledTableCell align="left">Unit</StyledTableCell>
            <StyledTableCell align="left">Type</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <StyledTableRow key={row.sno}>
              <StyledTableCell padding="checkbox">
                <Checkbox color="default" />
              </StyledTableCell>
              <StyledTableCell>{row.sno}</StyledTableCell>
              <StyledTableCell align="left">{row.prodname}</StyledTableCell>
              <StyledTableCell align="left">{row.SKU}</StyledTableCell>
              <StyledTableCell align="left">{row.sprice}</StyledTableCell>
              <StyledTableCell align="left">{row.mrp}</StyledTableCell>
              <StyledTableCell align="left">{row.unit}</StyledTableCell>
              <StyledTableCell align="left">{row.type}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
