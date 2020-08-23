import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

// UI Imports
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "2rem",
    marginRight: "2rem",
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    backgroundColor: "transparent",
    color: "#eeeeee",
    borderWidth: "3px",
    borderColor: "white",
    borderStyle: "solid",
    fontFamily: "Bebas Neue",
  },
}));

export default function BalanceGrid() {
  const classes = useStyles();

  const { transactions } = useContext(GlobalContext);

  const transactionValues = transactions.map(
    (transaction) => transaction.transactionValue
  );

  const balance = transactionValues
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const income = transactionValues
    .filter((transaction) => transaction > 0)
    .reduce((acc = 0, value) => (acc += value), 0)
    .toFixed(2);

  const expense = Math.abs(
    transactionValues
      .filter((transaction) => transaction < 0)
      .reduce((acc = 0, value) => (acc += value), 0)
  ).toFixed(2);

  return (
    <div className={classes.root}>
      <Grid
        direction="row"
        alignItems="center"
        justify="center"
        container
        spacing={2}
      >
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <h1>Current Balance: </h1>
            <br />
            <h2 id="balance">${balance}</h2>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <h1>Income</h1>
            <br />
            <h2>${income}</h2>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <h1>Expenditure</h1>
            <br />
            <h2>${expense}</h2>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
