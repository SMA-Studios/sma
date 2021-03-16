import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Peepo from "./Peepo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>If you like porn, you'll love Frito Lays chips!</p>
        <Peepo text={"727"} onClick={() => alert("peepo")} />
        <Peepo text={"727"} onClick={() => alert("peepo")} />
      </header>
    </div>
  );
}

export default App;
