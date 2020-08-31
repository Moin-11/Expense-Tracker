import React from "react";
import Header from "./header";
import { GlobalProvider } from "../context/globalContext";

import BalanceGrid from "../components/Balance_Grid";
import TransactionHistoryList from "./transactionHistory";
import { TransactionForm } from "../components/transactionForm";

import background from "../images/pexels-miguel-á-padriñán-745365.jpg";

const App = () => {
  return (
    <GlobalProvider>
      <div
        style={{
          margin: "0px",
          padding: "0px",
          borderWidth: "0px",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <Header />
        <BalanceGrid />
        <TransactionHistoryList />
        <TransactionForm />
      </div>
    </GlobalProvider>
  );
};

export default App;
