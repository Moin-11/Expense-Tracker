import { createMuiTheme } from "@material-ui/core/styles";
import common from "@material-ui/core/colors/common";
import amber from "@material-ui/core/colors/amber";

const theme = createMuiTheme({
  primary: {
    main: common.white,
  },

  secondary: {
    main: amber.A200,
  },

  typography: {
    fontFamily: ["Bebas Neue", "Arial"],
    h1: {
      fontSize: "3.0rem",
      letterSpacing: "2px",
      color: "white",
    },
    h2: {
      fontSize: "2.5rem",
      letterSpacing: "1px",
      color: "white",
    },

    h3: {
      fontSize: "2.0rem",
      color: "white",
    },

    h4: {
      fontSize: "1.5rem",
      color: "white",
    },
  },

  overrides: {
    MuiTableCell: {
      root: {
        //This can be referred from Material UI API documentation.
        fontSize: "1.5rem",
        borderStyle: "solid",
        borderWidth: "2.5px",
        fontFamily: "Bebas Neue",
        padding: "0px 10px",
      },
    },
  },
});

export default theme;
