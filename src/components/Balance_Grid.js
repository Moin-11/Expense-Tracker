import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import GridCard from "../components/gridCard";
// UI Imports
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "2rem",
    marginRight: "2rem",
  },
}));

export default function BalanceGrid() {
  const classes = useStyles();

  const { transactions } = useContext(GlobalContext);

  const transactionValues = transactions.map(
    (transaction) => transaction.transactionValue
  );

  const income = transactionValues
    .filter((transaction) => transaction > 0)
    .reduce((acc = 0, value) => (acc += value), 0)
    .toFixed(2);

  const expense = Math.abs(
    transactionValues
      .filter((transaction) => transaction < 0)
      .reduce((acc = 0, value) => (acc += value), 0)
  ).toFixed(2);

  const balance = transactionValues
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className={classes.root}>
      <Grid direction="row" container spacing={2}>
        <GridCard title="Balance" value={balance} />

        <GridCard title="Income" value={income} />

        <GridCard title="Expense" value={expense} />
      </Grid>
    </div>
  );
}
