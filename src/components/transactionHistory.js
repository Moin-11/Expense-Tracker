import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import TransactionItem from "./transaction";
import { Title } from "./Title";
// UI Imports
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles({
  tableTopcells: {
    borderStyle: "solid",
    borderWidth: "3px",
    color: "white",
    fontSize: "1.4rem",
    fontFamily: "Bebas Neue",
  },
});

const TransactionsTable = () => {
  const classes = useStyles();

  const { transactions } = useContext(GlobalContext);
  return (
    <div
      style={{
        marginTop: "3rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <ThemeProvider>
          <Title titleText="Transaction History" />
        </ThemeProvider>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TableContainer
          component={Paper}
          style={{
            backgroundColor: "blue",
            margin: "20px 0px 0px 10px",
          }}
        >
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  className={classes.tableTopcells}
                  maxWidth="10%"
                >
                  ID
                </TableCell>
                <TableCell
                  className={classes.tableTopcells}
                  align="left"
                  maxWidth="30%"
                >
                  Transaction Name
                </TableCell>
                <TableCell
                  className={classes.tableTopcells}
                  align="left"
                  maxWidth="30%"
                >
                  Transaction Value (in $)
                </TableCell>
                <TableCell
                  className={classes.tableTopcells}
                  align="center"
                  maxWidth="20%"
                >
                  Delete
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
    </div>
  );
};

export default TransactionsTable;
