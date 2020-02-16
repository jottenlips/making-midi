import React from "react";
import { Box, SynthBox } from "./Box";
import { withMidi } from "../util/withMidi";
import { ThreeDCanvas } from "./ThreeDCanvas";

const MidiDisplay = props => {
  return (
    <div style={{ width: "100vh", height: "100vh", alignItems: "center" }}>
      <ThreeDCanvas>
        <Box />
        <SynthBox />
      </ThreeDCanvas>
    </div>
  );
};

export const MidiIn = withMidi(MidiDisplay);
