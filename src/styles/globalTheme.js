import React from "react";

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
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
        padding: "0px 6px !important",
        fontSize: "2.0em",
        borderStyle: "solid",
        borderWidth: "2.5px",
        fontFamily: "Bebas Neue",
      },
    },
  },
});

const Theme = responsiveFontSizes(theme);

export default Theme;
