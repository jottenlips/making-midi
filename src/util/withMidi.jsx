import React, { useState, useEffect } from "react";
import WebMidi from "webmidi";
import { withSynth } from "./withSynth";
import { compose, length } from "ramda";

export const withWebMidi = Cmp => props => {
  const [noteEvent, setNoteEvent] = useState();
  const [midiOutId, setMidiOutId] = useState();
  const [midiOut, setMidiOut] = useState();
  // const [midiIn, setMidiIn] = useState();
  const [midiInId, setMidiInId] = useState();
  const [midiOuts, setMidiOuts] = useState();
  const [midiIns, setMidiIns] = useState();

  useEffect(() => {
    WebMidi.enable(() => {
      console.log(WebMidi.inputs);
      console.log(WebMidi.outputs);
      setMidiIns(WebMidi.inputs);
      setMidiOuts(WebMidi.outputs);
      if (length(WebMidi.inputs) > 0 && length(WebMidi.outputs) > 0) {
        const input = WebMidi.getInputById(
          midiInId || WebMidi.inputs[1]._midiInput.id
        );
        // const output = WebMidi.getOutputById("1295864820");
        const output = WebMidi.getOutputById(
          midiOutId || WebMidi.outputs[1]._midiOutput.id
        );

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
  }, [midiOutId, midiInId, midiIns, midiOuts]);

  return (
    <Cmp
      noteEvent={noteEvent}
      midiOuts={midiOuts}
      setMidiOutId={setMidiOutId}
      midiIns={midiIns}
      setMidiInId={setMidiInId}
      midiOut={midiOut}
      {...props}
    >
      {props.children}
    </Cmp>
  );
};

export const withMidi = compose(withSynth, withWebMidi);
