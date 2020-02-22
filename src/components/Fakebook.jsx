import React, { useState } from "react";
import { parseSong } from "../util/songParser";
import { composeMidiFile } from "../util/composeMidiFile";
import { flatten } from "ramda";
import { playMidi } from "../util/playMidi";
import styled from "styled-components";
import { soundFonts } from "../samples/SoundFonts";

const handleSubmit = ({ e, allChords, tempo, instrument, loop }) => {
  e.preventDefault();
  const chords = flatten(parseSong({ chords: allChords, octave: 4, loop }));
  console.log(chords, ":::CHORDS");
  const midiDataUri = composeMidiFile(chords, tempo);
  playMidi(midiDataUri, instrument);
};

const Fakebook = props => {
  const [chords, setChords] = useState(
    "BMaj7 D7 | GMaj7 Bb7 | EbMaj7 | Am7 D7 | GMaj7 Bb7 | EbMaj7 F#7 | BMaj7| Fm7 Bb7 | EbMaj7 | Am7 D7 | GMaj7 | C#m7 F#7 | BMaj7 | Fm7 Bb7| EbMaj7 | C#m7 F#7"
  );
  const [tempo, setTempo] = useState(240);
  const [loop, setLoop] = useState(1);
  const [instrument, setInstrument] = useState("bright_acoustic_piano");

  return (
    <div
      style={{
        width: "100vh",
        height: "100vh",
        alignItems: "center",
        paddingTop: 100
      }}
    >
      <form
        onSubmit={e =>
          handleSubmit({
            e,
            allChords: chords,
            tempo,
            instrument,
            loop
          })
        }
      >
        <JazzText value={chords} onChange={e => setChords(e.target.value)} />
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
        <select
          value={instrument}
          onChange={e => setInstrument(e.target.value)}
        >
          {soundFonts.map(font => (
            <option>{font}</option>
          ))}
        </select>
        <input type="submit" value="Play" />
      </form>
    </div>
  );
};

const JazzText = styled.textarea`
  font-size: 32pt;
  width: 800px;
  height: 600px;
`;

//   font-family: Boogaloo-Regular;

export default styled(Fakebook)``;
