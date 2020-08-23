//Functional Imports
import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

//Material- UI Imports
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";

import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  tablecells: {
    borderStyle: "solid",
    borderWidth: "2.5px",
    color: "white",
    fontSize: "1.2rem",
    fontFamily: "Bebas Neue",
  },

  cancelIcon: {
    "MuiIcon-root": {
      color: "blue",
    },
  },
});

const TransactionItem = ({ transaction }) => {
  const classes = useStyles();

  const { obliterateTransaction } = useContext(GlobalContext);

  return (
    <TableRow key={transaction.id}>
      <TableCell
        align="left"
        className={classes.tablecells}
        component="th"
        scope="row"
      >
        {transaction.id}
      </TableCell>
      <TableCell className={classes.tablecells} align="left">
        {transaction.detail}
      </TableCell>
      <TableCell className={classes.tablecells} align="left">
        {transaction.transactionValue}
      </TableCell>
      <TableCell className={classes.tablecells} align="center">
        <IconButton
        color = "secondary"
          onClick={() => {
            obliterateTransaction(transaction.id);
          }}
        >
          <CancelIcon fontSize="large" style = {{fill:"red"}}></CancelIcon>
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TransactionItem;
