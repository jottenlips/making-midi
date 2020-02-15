import React from "react";

import { withMidiInput } from "../util/withMidiInput";

const MidiDisplay = props => {
  return (
    <div style={{ width: "100%", height: "100%", alignItems: "center" }}>
      {props.noteEvent}
    </div>
  );
};

export const MidiIn = withMidiInput(MidiDisplay);
