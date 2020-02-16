import React from "react";
import { Box } from "./Box";
import { withMidiInput } from "../util/withMidiInput";
import { ThreeDCanvas } from "./ThreeDCanvas";

const MidiDisplay = props => {
  return (
    <div style={{ width: "100%", height: "100%", alignItems: "center" }}>
      {props.noteEvent}
      <ThreeDCanvas>
        <Box />
      </ThreeDCanvas>
    </div>
  );
};

export const MidiIn = withMidiInput(MidiDisplay);
