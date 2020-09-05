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
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  tableTopcells: {
    borderStyle: "solid",
    borderWidth: "3px",
    color: "white",
    fontFamily: "Bebas Neue",
    padding: "0px 10px",
  },
});

const TransactionsTable = () => {
  const classes = useStyles();

  const { transactions } = useContext(GlobalContext);
  return (
    <div
      style={{
        margin: "10px 20px 0px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: "10px",
        }}
      >
        <Title titleText="Transaction History" />
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
            backgroundColor: "transparent",
          }}
        >
          <Table
            className={classes.table}
            aria-label="simple table"
            dense
            table
          >
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  className={classes.tableTopcells}
                  maxWidth="10%"
                >
                  <Typography variant="h4">ID</Typography>
                </TableCell>
                <TableCell
                  className={classes.tableTopcells}
                  align="left"
                  maxWidth="30%"
                >
                  <Typography variant="h4">Transx Name</Typography>
                </TableCell>
                <TableCell
                  className={classes.tableTopcells}
                  align="left"
                  maxWidth="30%"
                >
                  <Typography variant="h4">Transx Value</Typography>
                </TableCell>
                <TableCell
                  className={classes.tableTopcells}
                  align="left"
                  maxWidth="20%"
                >
                  <Typography variant="h4">Delete</Typography>
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
