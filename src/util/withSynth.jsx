import React from "react";
import Tone from "tone";
var distortion = new Tone.Distortion(0.6);
var tremolo = new Tone.Tremolo().start();

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
  }).chain(distortion, tremolo, Tone.Master);

  const fmSynth = new Tone.FMSynth().toMaster();

  return (
    <Cmp synth={synth} fmSynth={fmSynth} {...props}>
      {props.children}
    </Cmp>
  );
};
