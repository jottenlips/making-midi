import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fakebook from "./components/Fakebook";
import { MidiIn } from "./components/MidiIn";

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
          <Route path="/fakebook">
            <Fakebook />
          </Route>
          <Route path="/midi-in">
            <MidiIn />
          </Route>
          <Route path="/">
            <Fakebook />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
