import React from "react";

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fakebook from "./components/Fakebook";
import { MidiIn } from "./components/MidiIn";
import MidiOut from "./components/MidiOut";
import { Code } from "./components/Code";
import { withMidi } from "./util/withMidi";
import styled from "styled-components";

export const Routes = props => {
  return (
    <Router basename={"/"}>
      <div style={{ flexDirection: "row" }}>
        <SideNav>
          <NavItem>
            <Link to="/fakebook">Jazzbot</Link>
          </NavItem>
          <NavItem>
            <Link to="/midi-in">midi-in</Link>
          </NavItem>
          <NavItem>
            <Link to="/midi-out">midi-out</Link>
          </NavItem>
          <NavItem>
            <Link to="/code">code</Link>
          </NavItem>
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
          <Route path="/code">
            <Code {...props} />
          </Route>
          <Route path="/" component={Fakebook}></Route>
        </Switch>
      </div>
    </Router>
  );
};


const NavItem = styled.div`
  padding-left: 20px;
  color: #ffffff;
`;

const SideNav = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  height: 50px;
  width: 100vw;
  z-index: 20;
  background-color: #000000;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  padding-bottom: 10px;
  top: 0;
  border-bottom: solid;
  border-bottom-width: 1px;
  border-bottom-color: #ffffff
`;

export default withMidi(Routes);
