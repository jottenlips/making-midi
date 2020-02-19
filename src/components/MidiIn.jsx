import React from "react";
import { Box, SynthBox } from "./Box";
import { ThreeDCanvas } from "./ThreeDCanvas";

export const MidiIn = props => {
  return (
    <div style={{ width: "300vh", height: "100vh", alignItems: "center" }}>
      <ThreeDCanvas>
        <SynthBox />
        <SynthBox position={[-3, 0, 0]} />
        <SynthBox position={[3, 0, 0]} />
      </ThreeDCanvas>
    </div>
  );
};
