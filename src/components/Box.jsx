import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { withSynth } from "../util/withSynth";

const noteFromRotation = rotation => {
  const index = Math.ceil(rotation * 5) % 7;
  const notes = ["C4", "D4", "Bb3", "G3", "E4", "F5", "D3", "F#5"];
  console.log(notes[index]);
  return notes[index];
};

export const Box = props => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  const rotationY = mesh.current ? mesh.current.rotation.y / 3 : 1;
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => {
        setActive(!active);
        console.log(mesh.current.rotation.y);
        const note = noteFromRotation(rotationY);
        props.synth && props.synth.triggerAttackRelease(note);
        props.midiOut &&
          props.midiOut.playNote(note, "all", { duration: 1000 });
      }}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "#FFFF00" : "#00ffff"}
      />
    </mesh>
  );
};

export const SynthBox = withSynth(Box);
