import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import { Title } from "./Title";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
// UI Imports
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//color imports

import Green from "@material-ui/core/colors/green";
import Red from "@material-ui/core/colors/red";

const useStyles = makeStyles(() => ({
  textFields: {
    color: "white",
    fontFamily: "Bebas Neue",
    "&::placeholder": {
      color: "lightgrey",
      fontSize: "1.3rem",
      opacity: "0.8",
    },
  },

  root: {
    display: "flex",
    margin: "100px 10px",
    justifyContent: "space-between",
    alignItems: "center",
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
        borderColor: "lightgrey",
        color: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        color: "white",
      },
      "&::placeholder": {
        color: "white",
      },

      "& ::placeholder :hover": {
        color: "white",
      },
    },
  },

  minusIcon: {
    fill: "white",
  },
  button: {
    alignSelf: "center",
    borderStyle: "solid",
    borderWidth: "2.0px",
    backgroundColor: "transparent",
    color: "lightGrey",
    fontFamily: "Bebas Neue",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "transparent",
      color: "white",
      opacity: "1.0",
      transition: "0.3s",
    },
  },

  positive: {
    alignSelf: "center",
    borderStyle: "solid",
    borderWidth: "2.0px",
    backgroundColor: "transparent",
    color: Green[400],
    fontFamily: "Bebas Neue",
    fontSize: "1rem",
  },

  negative: {
    alignSelf: "center",
    borderStyle: "solid",
    borderWidth: "2.0px",
    backgroundColor: "transparent",
    color: Red[500],
    fontFamily: "Bebas Neue",
    fontSize: "1rem",
  },
}));

export const TransactionForm = () => {
  const classes = useStyles();

  //Every single property of the Transaction Object is manipulated through useState();

  const [detail, setDetail] = useState("");
  const [transactionValue, setTransactionValue] = useState(0);

  const { transactions } = useContext(GlobalContext);
  const { addTransaction } = useContext(GlobalContext);

  //For checkbox

  const [positive, setPositive] = useState(true);

  const onSubmit = (event) => {
    event.preventDefault();

    if (transactionValue === 0 || detail === "") {
      return;
    }
    const newTransaction = {
      id: transactions.length + 1,
      detail,
      transactionValue: positive ? +transactionValue : -transactionValue,
    };
    addTransaction(newTransaction);
  };

  return (
    <form className={classes.root}>
      <ThemeProvider>
        <Title titleText="Add New Transaction" />
      </ThemeProvider>
      <div
        style={{
          padding: "0px 0px 0px 50px !important",
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            className={classes.button}
            variant="contained"
            onClick={onSubmit}
          >
            Submit
          </Button>

          <Button
            className={positive ? classes.positive : classes.negative}
            variant="text"
            onClick={() => {
              setPositive(!positive);
            }}
          >
            {positive ? "+" : "-"}
          </Button>
        </div>
      </div>
    </form>
  );
};
