import React from "react";

const Header = () => {
  return (
    <div
      style={{
        borderWidth: "0px",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "3rem",
          fontFamily: "Bebas Neue",
          fontSize: "2.3rem",
          color: "white",
        }}
      >
        Expense Tracker by Moin Sabri
      </div>
    </div>
  );
};

export default Header;
