import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fakebook from "./components/Fakebook";
import { MidiIn } from "./components/MidiIn";
import MidiOut from "./components/MidiOut";

export const Routes = _props => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/fakebook">Fakebook</Link>
            </li>
            <li>
              <Link to="/midi-in">midi-in</Link>
            </li>
            <li>
              <Link to="/midi-out">midi-out</Link>
            </li>
            <li>
              <Link to="/midi-chat">midi-chat</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/fakebook" component={Fakebook}></Route>
          <Route path="/midi-in" component={MidiIn}></Route>
          <Route path="/midi-out" component={MidiOut}></Route>
          <Route path="/" component={Fakebook}></Route>
        </Switch>
      </div>
    </Router>
  );
};
