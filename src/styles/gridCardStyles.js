import { makeStyles } from "@material-ui/core/styles";

const GCardStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: theme.palette.primary,
    width: "70%",
  },

  card: {
    root: {
      textAlign: "center",
      backgroundColor: "transparent",
      width: "",
    },
  },

  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    background: "transparent",
  },
}));

export default GCardStyles;
