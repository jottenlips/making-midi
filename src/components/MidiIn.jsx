import React from "react";

import { withMidi } from "../util/withMidi";

const MidiDisplay = props => {
  return (
    <div style={{ width: "100%", height: "100%", alignItems: "center" }}>
      {props.noteEvent}
    </div>
  );
};

export const MidiIn = withMidi(MidiDisplay);
