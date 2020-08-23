import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import { makeStyles } from "@material-ui/core/styles";
import TransactionItem from "./transaction";

// UI Imports
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    height: "auto",
  },

  tableTopcells: {
    borderStyle: "solid",
    borderWidth: "3px",

    color: "white",
    fontSize: "1.4rem",
    fontFamily: "Bebas Neue",
  },
});

const TransactionHistoryList = () => {
  const classes = useStyles();

  const { transactions } = useContext(GlobalContext);
  const { obliterateTransaction } = useContext(GlobalContext);
  return (
    <div>
      <h1
        style={{
          paddingTop: "30px",
          paddingBottom: "20px",
          paddingLeft: "10px",
          fontFamily: "Bebas Neue",
          fontSize: "3.0rem",
          color: "white",
        }}
      >
        Transactions History
      </h1>
      <TableContainer
        component={Paper}
        style={{ backgroundColor: "transparent" }}
      >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" className={classes.tableTopcells}>
                Transaction ID
              </TableCell>
              <TableCell className={classes.tableTopcells} align="left">
                Transaction Name
              </TableCell>
              <TableCell className={classes.tableTopcells} align="left">
                Transaction Value (in $)
              </TableCell>
              <TableCell className={classes.tableTopcells} align="center">
                Delete Row
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => {
              return (
                <TransactionItem
                  key={transactions.id}
                  transaction={transaction}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TransactionHistoryList;
