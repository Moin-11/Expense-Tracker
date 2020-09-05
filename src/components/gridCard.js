import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import GCardStyles from "../styles/gridCardStyles";

const GridCard = ({ title, value }) => {
  const classes = GCardStyles();

  return (
    <Grid item xs={11} md={4}>
      <Paper elevation={5} className={classes.paper}>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="h2">$ {value}</Typography>
      </Paper>
    </Grid>
  );
};

export default GridCard;
