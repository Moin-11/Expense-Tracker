import React from "react";

// MUI
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

let theme = createMuiTheme({
  typography: {
    fontFamily: "Bebas Neue",
    h1: {
      fontSize: "3rem",
      color: "white",
      margin: "0px 0px 0px 10px",
    },
  },
});
theme = responsiveFontSizes(theme);
export const Title = ({ titleText }) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">{titleText}</Typography>
    </ThemeProvider>
  );
};
