import React from "react";
import "./App.css";
import { withMidi } from "./util/withMidi";
import { Routes } from "./Routes";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
};

export default App;
