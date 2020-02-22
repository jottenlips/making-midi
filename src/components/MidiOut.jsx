import React, { useState } from "react";
import { parseSong } from "../util/songParser";
import { composeMidiFile } from "../util/composeMidiFile";
import { flatten } from "ramda";
import { playMidiThroughOutput } from "../util/playMidi";
import styled from "styled-components";
import { Box } from "./Box";
import { ThreeDCanvas } from "./ThreeDCanvas";

const handleSubmit = ({ e, setChords, allChords, output, tempo, loop }) => {
  e.preventDefault();
  const chords = flatten(parseSong({ chords: allChords, octave: 4, loop }));
  const midiDataUri = composeMidiFile(chords, tempo);
  playMidiThroughOutput(midiDataUri, output);
};

const MidiOut = props => {
  const [chords, setChords] = useState("");
  const [tempo, setTempo] = useState(160);
  const [loop, setLoop] = useState(1);

  const [noteBoxes, setNoteBoxes] = useState([
    ["A4", "C4", "D4", "E4", "G4"],
    ["G4", "A4", "B4", "Db4", "Eb4", "F4"],
    ["A5", "Db5", "Eb5", "E5", "G2"],
    ["G4", "A4", "B4", "Db4", "Eb4", "F4"],
    ["A5", "Db5", "Eb5", "E5", "G2"]
  ]);

  console.log(props, setNoteBoxes);
  return (
    <>
      <select>
        {props.midiOuts &&
          props.midiOuts.map(output => (
            <option
              value={output._midiOutput.id}
              onChange={() => props.setMidiOutId(output._midiInput.id)}
            >
              {output._midiOutput.name}
            </option>
          ))}
      </select>
      <form
        onSubmit={e =>
          handleSubmit({
            e,
            allChords: chords,
            output: props.midiOut,
            loop,
            tempo
          })
        }
      >
        <MidiText value={chords} onChange={e => setChords(e.target.value)} />
        <input type="submit" value="Play" />
      </form>
      <div
        style={{
          width: "100vh",
          height: "100vh",
          alignItems: "center",
          paddingTop: 100
        }}
      >
        <input
          value={tempo}
          type="number"
          onChange={e => {
            setTempo(e.target.value);
          }}
        />
        <input
          value={loop}
          type="number"
          onChange={e => {
            setLoop(e.target.value);
          }}
        />
        <ThreeDCanvas style={{ width: "100vw", height: "100vh" }}>
          {noteBoxes.map((notes, i) =>
            i % 2 !== 0 ? (
              <Box
                key={i}
                midiOut={props.midiOut}
                notes={notes}
                position={[-i * 2, -i * 0.5, 0]}
              />
            ) : (
              <Box
                key={i}
                midiOut={props.midiOut}
                notes={notes}
                position={[i * 0.8, i * 0.5, 0]}
              />
            )
          )}
        </ThreeDCanvas>
      </div>
    </>
  );
};

const MidiText = styled.textarea`
  font-size: 32pt;
  font-family: Arial;
`;

export default MidiOut;
