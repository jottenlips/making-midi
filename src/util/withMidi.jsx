import React, { useState } from "react";
import WebMidi from "webmidi";
import { withSynth } from "./withSynth";
import { compose, path, length } from "ramda";

export const withWebMidi = Cmp => props => {
  const [noteEvent, setNoteEvent] = useState();
  const [midiOut, setMidiOut] = useState();

  WebMidi.enable(() => {
    console.log(WebMidi.inputs);
    console.log(WebMidi.outputs);
    if (length(WebMidi.inputs) > 0 && length(WebMidi.outputs) > 0) {
      const midiInputId = WebMidi.inputs[1]._midiInput.id;
      const input = WebMidi.getInputById(midiInputId);
      const midiOutputId = WebMidi.outputs[0]._midiOutput.id;
      const output = WebMidi.getOutputById("1295864820");
      setMidiOut(output);
      input.addListener("noteon", "all", e => {
        console.log(
          "Received 'noteon' message (" + e.note.name + e.note.octave + ")."
        );
        const note = e.note.name + e.note.octave;
        setNoteEvent(note);
        props.synth.triggerAttackRelease(note, 1.5);
      });
      input.removeListener("noteoff");
    }
  });

  return (
    <Cmp noteEvent={noteEvent} midiOut={midiOut} {...props}>
      {props.children}
    </Cmp>
  );
};

export const withMidi = compose(withSynth, withWebMidi);
