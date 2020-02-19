import React, { useState } from "react";
import { parseSong } from "../util/songParser";
import { composeMidiFile } from "../util/composeMidiFile";
import { flatten } from "ramda";
import { playMidiThroughOutput } from "../util/playMidi";
import styled from "styled-components";
import { Box } from "./Box";
import { ThreeDCanvas } from "./ThreeDCanvas";

const handleSubmit = (event, setChords, allChords, output) => {
  event.preventDefault();
  setChords(allChords);
  const chords = flatten(parseSong(allChords, 4));
  const midiDataUri = composeMidiFile(chords, 240);
  playMidiThroughOutput(midiDataUri, output);
};

const MidiOut = props => {
  const [chords, setChords] = useState("");
  console.log(props);
  return (
    <div
      style={{
        width: "100vh",
        height: "100vh",
        alignItems: "center",
        paddingTop: 100
      }}
    >
      <form onSubmit={e => handleSubmit(e, setChords, chords, props.midiOut)}>
        <MidiText value={chords} onChange={e => setChords(e.target.value)} />
        <input type="submit" value="Play" />
      </form>
      <ThreeDCanvas>
        <Box midiOut={props.midiOut} />
      </ThreeDCanvas>
    </div>
  );
};

const MidiText = styled.textarea`
  font-size: 32pt;
  font-family: Arial;
`;

export default MidiOut;
