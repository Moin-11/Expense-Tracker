import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import { Title } from "./Title";
import { ThemeProvider } from "@material-ui/core/styles";
import useStyles from "../styles/transactionFormStyles";
// UI Imports
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const TransactionForm = () => {
  const classes = useStyles();

  //Every single property of the Transaction Object is manipulated through useState();

  const [detail, setDetail] = useState("");
  const [transactionValue, setTransactionValue] = useState("");

  const { transactions } = useContext(GlobalContext);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (event) => {
    event.preventDefault();
    if (transactionValue === "" || detail === "") {
      return;
    }
    const newTransaction = {
      id: transactions.length + 1,
      detail,
      transactionValue: +transactionValue,
    };
    addTransaction(newTransaction);
  };

  return (
    <form className={classes.root} onSubmit={onSubmit}>
      <Title titleText="Add New Transaction" />
      <div
        style={{
          padding: "0px 0px 0px 20px !important",
        }}
      >
        <TextField
          inputProps={{ className: classes.textFields }}
          required="true"
          id="outlined-multiline-flexible"
          placeholder="Transaction Details"
          variant="outlined"
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        />

        <br />
        <br />
        <TextField
          inputProps={{ className: classes.textFields }}
          required="true"
          type="number"
          id="outlined-multiline-flexible"
          placeholder="Enter Transaction Value"
          variant="outlined"
          value={transactionValue}
          onChange={(e) => {
            setTransactionValue(e.target.value);
          }}
        />
        <br />
        <br />
        <Button
          className={classes.button}
          variant="contained"
          onClick={onSubmit}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
