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
  const [noteBoxes, setNoteBoxes] = useState([
    ["A4", "C4", "D4", "E4", "G4"],
    ["G4", "A4", "B4", "Db4", "Eb4", "F4"]
  ]);

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
        {noteBoxes.map((notes, i) => (
          <Box key={i} notes={notes} position={[-i * 2, 0, 0]} />
        ))}
      </ThreeDCanvas>
    </div>
  );
};

const MidiText = styled.textarea`
  font-size: 32pt;
  font-family: Arial;
`;

const ScaleInput = styled.input`
  margin: 10;
  flex: 1;
  padding: 10;
`;

export default MidiOut;
