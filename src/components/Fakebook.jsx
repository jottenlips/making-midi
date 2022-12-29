import React, { useState } from "react";
import { parseSong } from "../util/songParser";
import { composeMidiFile } from "../util/composeMidiFile";
import { flatten } from "ramda";
import { playMidi } from "../util/playMidi";
import styled from "styled-components";
import { soundFonts } from "../samples/SoundFonts";

const handleSubmit = ({
  e,
  allChords,
  tempo,
  instrument,
  loop,
  bass,
  setFile
}) => {
  e.preventDefault();
  try {
    const chords = flatten(parseSong({ chords: allChords, octave: 4, loop }));
    console.log(chords, ":::CHORDS");
    const midiDataUri = composeMidiFile(chords, tempo, bass);
    setFile(midiDataUri);
    playMidi(midiDataUri, instrument);
  } catch (e) {
    alert("unable to parse song");
  }
};

const Fakebook = props => {
  const [chords, setChords] = useState(
    "BMaj7 D7 | GMaj7 Bb7 | EbMaj7 | Am7 D7 | GMaj7 Bb7 | EbMaj7 F#7 | BMaj7| Fm7 Bb7 | EbMaj7 | Am7 D7 | GMaj7 | C#m7 F#7 | BMaj7 | Fm7 Bb7| EbMaj7 | C#m7 F#7"
  );
  const [tempo, setTempo] = useState(240);
  const [loop, setLoop] = useState(1);
  const [bass, setBass] = useState(false);
  const [file, setFile] = useState();

  const [instrument, setInstrument] = useState("electric_grand_piano");

  return (
    <div
      style={{
        width: "100%",
        height: '100vh',
        alignItems: "center",
        paddingTop: 90
      }}
    >
      <form
        onSubmit={e =>
          handleSubmit({
            e,
            allChords: chords,
            tempo,
            instrument,
            loop,
            bass,
            setFile
          })
        }
      >
        <JazzText value={chords} onChange={e => setChords(e.target.value)} />
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

          <Text>Instrument:</Text>

          <select
            value={instrument}
            onChange={e => setInstrument(e.target.value)}
          >
            {soundFonts.map(font => (
              <option>{font}</option>
            ))}
          </select>
          <Space />
          <Text>Bassline:</Text>
          <select value={bass} onChange={e => setBass(e.target.value)}>
            <option value={true}>{"true"}</option>
            <option value={false}>{"false"}</option>
          </select>
          <Space />
          <input type="submit" value="Play" />
          <Space />
          <Space />
          <a href={file}>Download MIDI</a>
        </Options>
      </form>
    </div>
  );
};

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
const JazzText = styled.textarea`
  font-size: 24pt;
  max-width: 800px;
  width: 100%;
  height: 400px;
`;

export default styled(Fakebook)``;
