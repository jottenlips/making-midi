import React from "react";
import { Box, SynthBox } from "./Box";
import { ThreeDCanvas } from "./ThreeDCanvas";

export const MidiIn = props => {
  return (
    <div style={{ width: "100vh", height: "100vh", alignItems: "center" }}>
      <ThreeDCanvas>
        <Box />
        <SynthBox />
      </ThreeDCanvas>
    </div>
  );
};
