import React, { useState } from "react";
import { parseSong } from "../util/songParser";
import { composeMidiFile } from "../util/composeMidiFile";
import { flatten } from "ramda";
import { playMidiThroughOutput } from "../util/playMidi";
import styled from "styled-components";
import { Box } from "./Box";
import { ThreeDCanvas } from "./ThreeDCanvas";

const handleSubmit = ({ e, allChords, output, tempo, loop, bass }) => {
  try {
    e.preventDefault();
    const chords = flatten(parseSong({ chords: allChords, octave: 4, loop }));
    const midiDataUri = composeMidiFile(chords, tempo, bass);
    playMidiThroughOutput(midiDataUri, output);
  } catch {
    alert("unable to parse song");
  }
};

const MidiOut = props => {
  const [chords, setChords] = useState("A | B | C | D");
  const [tempo, setTempo] = useState(160);
  const [loop, setLoop] = useState(1);
  const [bass, setBass] = useState(false);

  const [noteBoxes, setNoteBoxes] = useState([
    ["A4", "C4", "D4", "E4", "G4"],
    ["G4", "A4", "B4", "Db4", "Eb4", "F4"],
    ["A5", "Db5", "Eb5", "E5", "G2"],
    ["G4", "A4", "B4", "Db4", "Eb4", "F4"],
    ["A5", "Db5", "Eb5", "E5", "G2"]
  ]);

  return (
      <div
        style={{
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
        paddingTop: 90,
        alignItems: "center"
        }}
    >
      {props.midiOuts && props.midiOuts.length === 0 && <p>Please plugin a midi output</p>}
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
              tempo,
              bass
            })
          }
        >
          <MidiText value={chords} onChange={e => setChords(e.target.value)} />
          <input type="submit" value="Play" />
        </form>
        <Options>
          <Text>Tempo:</Text>
          <input
            value={tempo}
            type="number"
            onChange={e => {
              setTempo(e.target.value);
            }}
          />
          <Space />

          <Text>Repeat:</Text>
          <input
            value={loop}
            type="number"
            onChange={e => {
              setLoop(e.target.value);
            }}
          />

          <Space />
          <Text>Bassline:</Text>
          <select value={bass} onChange={e => setBass(e.target.value)}>
            <option value={true}>{"true"}</option>
            <option value={false}>{"false"}</option>
          </select>
        </Options>
        <ThreeDCanvas style={{ width: "100%", height: 400}}>
          {noteBoxes.map((notes, i) =>
            i % 2 !== 0 ? (
              <Box
                key={i}
                midiOut={props.midiOut}
                notes={notes}
                position={[-i, 0.5, 0]}
              />
            ) : (
              <Box
                key={i}
                midiOut={props.midiOut}
                notes={notes}
                position={[i - 4, 2, 0]}
              />
            )
          )}
        </ThreeDCanvas>
      </div>
  );
};

const MidiText = styled.textarea`
  font-size: 16pt;
  font-family: Arial;
`;

const Space = styled.div`
  padding: 20;
`;
const Text = styled.text`
  font-size: 12pt;
`;

const Options = styled.div`
  justify-content: space-between;
  flex-direction: column;
  height: 100px;
`;

export default MidiOut;
