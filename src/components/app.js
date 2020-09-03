import React from "react";
import Header from "./header";
import { GlobalProvider } from "../context/globalContext";

import BalanceGrid from "../components/Balance_Grid";
import TransactionHistoryList from "./transactionHistory";
import { TransactionForm } from "../components/transactionForm";

import background from "../images/pexels-george-becker-374918.jpg";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  return (
    <GlobalProvider>
      <CssBaseline>
        <div
          style={{
            margin: "0px",
            padding: "0px",
            borderWidth: "0px",
            backgroundImage: `url(${background})`,
            backgroundSize: "100% 100%",
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
      </CssBaseline>
    </GlobalProvider>
  );
};

export default App;
