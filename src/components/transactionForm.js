import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/globalContext";

// UI Imports
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  textFields: {
    color: "white",
    fontFamily: "Bebas Neue",
    "&::placeholder": {
      color: "lightBlue",
      fontSize: "1.2rem",
      opacity: "0.8",
    },
  },

  root: {
    display: "flex",
    paddingTop: "100px",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingLeft: "10px",

    color: "white",
    borderWidth: "3px",
    borderColor: "white !important",
    borderInlineColor: "white",
    outlineColor: "white",
    "& .MuiTextField-root": {
      width: "50vw",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "whiteSmoke",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "white",
        color: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "lightBlue",
        color: "white",
      },
      "&::placeholder": {
        color: "white",
      },
      width: "50vw",
      display: "flex",

      alignItems: "center",
      justifyContent: "center",
    },
  },
  button: {
    borderStyle: "solid",
    borderWidth: "2.0px",
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "Bebas Neue",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "transparent",
      color: "lightBlue",
      transition: "0.3s",
    },
  },
}));

export const TransactionForm = () => {
  const classes = useStyles();

  //Every single property of the Transaction Object is manipulated through useState();

  const [detail, setDetail] = useState("");
  const [transactionValue, setTransactionValue] = useState("");

  const { transactions } = useContext(GlobalContext);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (event) => {
    event.preventDefault();
    if (transactionValue == "" || detail == "") {
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
      <h1
        style={{
          color: "white",
          fontFamily: "Bebas Neue",
          letterSpacing: "2px",
          fontSize: "3rem",
        }}
      >
        Add New Transaction
      </h1>

      <div>
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
