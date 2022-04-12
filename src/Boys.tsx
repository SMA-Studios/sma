import {
  Box,
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core";
import React from "react";
import { callbackify } from "util";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: 0,
      overflow: "hidden",
    },
    paper: {
      width: "calc(100vw/6)",
      height: 100,
    },
  })
);

const Boys = () => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" justifyContent="center" width={"100vw"} height={"100vh"}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Box display="flex" textAlign="center" justifyContent={"center"}>
            <Paper className={classes.paper}>peepoSit</Paper>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" textAlign="center" justifyContent={"center"}>
            <Paper className={classes.paper}>peepoVibetown</Paper>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" textAlign="center" justifyContent={"center"}>
            <Paper className={classes.paper}>peepoBoggerton</Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Boys;
