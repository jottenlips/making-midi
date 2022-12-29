import React from "react";
import { Canvas } from "react-three-fiber";

export const ThreeDCanvas = props => {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: '800px',
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {props.children}
    </Canvas>
  );
};

export const SmallCanvas = props => {
  return (
    <Canvas style={{ width: 290, height: 150 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {props.children}
    </Canvas>
  );
};
