//Functional Imports
import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

//Material- UI Imports
import IconButton from "@material-ui/core/IconButton";
import CancelRounded from "@material-ui/icons/CancelRounded";

import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  tablecells: {
    color: "white",
    padding: "0px 0px",
  },

  cancelIcon: {
    "MuiIcon-root": {
      color: "red",
    },
  },
});

const TransactionRow = ({ transaction }) => {
  const classes = useStyles();

  const { obliterateTransaction } = useContext(GlobalContext);

  return (
    <TableRow key={transaction.id}>
      <TableCell align="left" className={classes.tablecells} maxWidth="20%">
        <Typography variant="h4">{transaction.id}</Typography>
      </TableCell>
      <TableCell className={classes.tablecells} align="left" maxWidth="30%">
        <Typography variant="h4">{transaction.detail}</Typography>
      </TableCell>
      <TableCell className={classes.tablecells} align="left" maxWidth="30%">
        <Typography variant="h4">{transaction.transactionValue}</Typography>
      </TableCell>
      <TableCell className={classes.tablecells} align="center" maxWidth="20%">
        <IconButton
          onClick={() => {
            obliterateTransaction(transaction.id);
          }}
        >
          <CancelRounded
            fontSize="medium"
            style={{ fill: "red" }}
          ></CancelRounded>
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TransactionRow;
