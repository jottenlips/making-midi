import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { withSynth } from "../util/withSynth";
import { length } from "ramda";

const noteFromRotation = (rotation, notes) => {
  const index = Math.ceil(rotation * 5) % length(notes);
  console.log(notes[index]);
  return notes[index];
};

export const Box = props => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const noteEvent = props.noteEvent;
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    mesh.current.rotation.y =
      noteEvent && noteEvent.includes("C")
        ? (mesh.current.rotation.y += 1)
        : mesh.current.rotation.y;

    // mesh.current.position.z = active
    //   ? (mesh.current.position.z += 0.01)
    //   : (mesh.current.position.z -= 0.01);
  });
  const rotationY = mesh.current ? mesh.current.rotation.y / 3 : 1;
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={!active ? [0.5, 0.5, 0.5] : [0.7, 0.7, 0.7]}
      onClick={e => {
        setActive(!active);
        console.log(mesh.current.rotation.y);
        const note = noteFromRotation(rotationY, props.notes);
        props.synth && props.synth.triggerAttackRelease(note, 0.5);
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
