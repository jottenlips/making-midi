import React, { useState } from "react";
import WebMidi from "webmidi";

export const withMidiOutput = Cmp => props => {
  const [midiOut, setMidiOut] = useState();

  WebMidi.enable(() => {
    console.log(WebMidi.inputs);
    console.log(WebMidi.outputs);
    const midiInputId = WebMidi.outputs[0]._midiOutput.id;
    const output = WebMidi.getOutputById("1295864820");
    setMidiOut(output);
  });

  return (
    <Cmp midiOut={midiOut} {...props}>
      {props.children}
    </Cmp>
  );
};
