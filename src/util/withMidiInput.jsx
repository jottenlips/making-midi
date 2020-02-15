import React, { useState } from "react";
import WebMidi from "webmidi";
import { withSynth } from "./withSynth";
import { compose, path } from "ramda";

export const withMidiIn = Cmp => props => {
  const [noteEvent, setNoteEvent] = useState();
  const [midiOut, setMidiOut] = useState();

  WebMidi.enable(() => {
    console.log(WebMidi.inputs);
    console.log(WebMidi.outputs);
    const midiInputId = WebMidi.inputs[1]._midiInput.id;
    const input = WebMidi.getInputById(midiInputId);
    input.addListener("noteon", "all", e => {
      console.log(
        "Received 'noteon' message (" + e.note.name + e.note.octave + ")."
      );
      const note = e.note.name + e.note.octave;
      setNoteEvent(note);
      props.synth.triggerAttackRelease(note, 1.5);
    });
    input.removeListener("noteoff");
  });

  return (
    <Cmp noteEvent={noteEvent} {...props}>
      {props.children}
    </Cmp>
  );
};

export const withMidiInput = compose(withSynth, withMidiIn);
