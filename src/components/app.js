import React from "react";
import Header from "./header";
import { GlobalProvider } from "../context/globalContext";

import BalanceGrid from "../components/Balance_Grid";
import TransactionHistoryList from "./transactionHistory";
import { TransactionForm } from "../components/transactionForm";

import background from "../images/bg.jpg";
import CssBaseline from "@material-ui/core/CssBaseline";

import Theme from "../styles/globalTheme";
import { ThemeProvider } from "@material-ui/core/styles";
const App = () => {
  return (
    <GlobalProvider>
      <CssBaseline>
        <ThemeProvider theme={Theme}>
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
              aspectRatio: "revert",
            }}
          >
            <Header />
            <BalanceGrid />
            <TransactionHistoryList />
            <TransactionForm />
          </div>
        </ThemeProvider>
      </CssBaseline>
    </GlobalProvider>
  );
};

export default App;
