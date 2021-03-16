import React, { useState } from "react";
import { Button } from "@material-ui/core";

interface IPeepo {
  text: string;
  onClick: () => void;
}

const Peepo = ({ text, onClick }: IPeepo) => {
  return (
    <Button color="inherit" onClick={onClick}>
      {text}
    </Button>
  );
};

export default Peepo;
