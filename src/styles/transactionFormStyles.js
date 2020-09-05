import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  textFields: {
    color: "white",
    fontFamily: "Bebas Neue",
    "&::placeholder": {
      color: "lightgrey",
      fontSize: "1.3rem",
      opacity: "0.8",
    },
  },

  root: {
    display: "flex",
    marginTop: "100px",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "10px",

    color: "white",
    borderWidth: "3px",
    borderColor: "white !important",
    borderInlineColor: "white",
    outlineColor: "white",

    "& .MuiTextField-root": {
      width: "50vw",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "whiteSmoke",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "lightgrey",
        color: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        color: "white",
      },
      "&::placeholder": {
        color: "white",
      },

      "& ::placeholder :hover": {
        color: "white",
      },
    },
  },
  button: {
    alignSelf: "center",
    borderStyle: "solid",
    borderWidth: "2.0px",
    backgroundColor: "transparent",
    color: "lightGrey",
    fontFamily: "Bebas Neue",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "transparent",
      color: "white",
      opacity: "1.0",
      transition: "0.3s",
    },
  },
}));

export default useStyles;
