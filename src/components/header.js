import React from "react";

const Header = () => {
  return (
    <div>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "3rem",
          fontFamily: "Courgette",
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
