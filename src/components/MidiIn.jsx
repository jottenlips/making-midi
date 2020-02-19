import React, { useState } from "react";
import { Box, SynthBox } from "./Box";
import { ThreeDCanvas } from "./ThreeDCanvas";

export const MidiIn = props => {
  return (
    <div style={{ width: "300vh", height: "100vh", alignItems: "center" }}>
      <div style={{ justifyContent: "space-between" }}></div>
      <ThreeDCanvas>
        <SynthBox
          notes={["A4", "C5", "D3", "E4", "G4", "A3", "C4", "D5", "E4", "G4"]}
          position={[0, 0, 0]}
        />
      </ThreeDCanvas>
    </div>
  );
};
