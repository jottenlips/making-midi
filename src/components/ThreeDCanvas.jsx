import React from "react";
import { Canvas } from "react-three-fiber";

export const ThreeDCanvas = props => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {props.children}
    </Canvas>
  );
};
