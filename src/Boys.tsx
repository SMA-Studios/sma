import {
  Box,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      width: 420,
      height: 300,
    },
  })
);

const Boys = () => {
  const classes = useStyles();

  return (
    <Box display="flex" width={1260} height={900}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <Paper className={classes.paper}>a</Paper>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <Paper className={classes.paper}>b</Paper>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <Paper className={classes.paper}>c</Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Boys;
