import React from "react";

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fakebook from "./components/Fakebook";
import { MidiIn } from "./components/MidiIn";
import MidiOut from "./components/MidiOut";
import { withMidi } from "./util/withMidi";
import styled from "styled-components";

export const Routes = props => {
  return (
    <Router basename={"/"}>
      <div style={{ flexDirection: "row" }}>
        <SideNav>
          <div>
            <Link to="/fakebook">Fakebook</Link>
          </div>
          <div>
            <Link to="/midi-in">midi-in</Link>
          </div>
          <div>
            <Link to="/midi-out">midi-out</Link>
          </div>
          {/* <Link to="/midi-chat">midi-chat</Link> */}
        </SideNav>
        <Switch>
          <Route path="/fakebook">
            <Fakebook />
          </Route>
          <Route path="/midi-in">
            <MidiIn {...props} />
          </Route>
          <Route path="/midi-out">
            <MidiOut {...props} />
          </Route>
          <Route path="/" component={Fakebook}></Route>
        </Switch>
      </div>
    </Router>
  );
};

const SideNav = styled.div`
  height: 100%;
  width: 50;
  left: 0;
  z-index: 20;
  position: fixed;
  flex: 1;
  background-color: #ff00ff;
  justify-content: left;
`;

export default withMidi(Routes);
