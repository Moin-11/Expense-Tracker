import React from "react";
import { Typography } from "@material-ui/core";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "3rem",
        fontFamily: "Bebas Neue",
        color: "white",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5">Expense Tracker by Moin11</Typography>
      <Typography variant="subtitle2">moin11.dev@gmail.com</Typography>
    </div>
  );
};

export default Header;
