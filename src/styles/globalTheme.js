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
