import React, { createContext, useReducer } from "react";
import TransactionsManipulator1000 from "./transReducer";

const initialState = {
  transactions: [
    
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    TransactionsManipulator1000,
    initialState
  );

  //Using TM1000 to Obliterate a Transaction

  const obliterateTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        obliterateTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
