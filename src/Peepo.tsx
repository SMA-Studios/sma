import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import Boys from "./Boys";

const Peepo = () => {
  return (
    <>
      <Box
        display="flex"
        p={0}
        m={0}
        flexDirection="column"
        alignContent="flex-start"
        justifyContent="flex-start"
        style={{ backgroundColor: "#abe6ff", height: "100vh", width: "100vw" }}
      >
        <Paper
          style={{
            backgroundColor: "#0c8cc2",
            color: "#b8eaff",
          }}
          elevation={6}
        >
          <Typography align="center" variant="h1">
            SMA STUDIOS
          </Typography>
        </Paper>
        <Boys />
      </Box>
    </>
  );
};

export default Peepo;
