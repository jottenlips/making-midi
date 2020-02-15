import React from "react";
import Tone from "tone";

export const withSynth = Cmp => props => {
  const synth = new Tone.PolySynth({
    oscillator: {
      type: "fmsquare",
      modulationType: "sawtooth",
      modulationIndex: 3,
      harmonicity: 3.4
    },

    envelope: {
      attack: 0.001,
      decay: 0.1,
      sustain: 0.1,
      release: 0.1
    }
  }).toMaster();
  return (
    <Cmp synth={synth} {...props}>
      {props.children}
    </Cmp>
  );
};
