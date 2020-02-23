import React from "react";
import { Canvas } from "react-three-fiber";

export const ThreeDCanvas = props => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {props.children}
    </Canvas>
  );
};

export const SmallCanvas = props => {
  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {props.children}
    </Canvas>
  );
};
