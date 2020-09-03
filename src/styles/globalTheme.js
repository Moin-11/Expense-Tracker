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
});

const Theme = responsiveFontSizes(theme);

export default Theme;
