import React, { useState } from "react";
import { parseSong } from "../util/songParser";
import { composeMidiFile } from "../util/composeMidiFile";
import { flatten } from "ramda";
import { playMidi } from "../util/playMidi";
import styled from "styled-components";
import { withMidiOutput } from "../util/withMidiOutput";

const handleSubmit = (event, setChords, allChords) => {
  event.preventDefault();
  setChords(allChords);
  const chords = flatten(parseSong(allChords, 4));
  const midiDataUri = composeMidiFile(chords, 240);
  playMidi(midiDataUri);
};

const Fakebook = props => {
  const [chords, setChords] = useState("");
  return (
    <div>
      <form onSubmit={e => handleSubmit(e, setChords, chords)}>
        <MidiText value={chords} onChange={e => setChords(e.target.value)} />
        <input type="submit" value="Play" />
      </form>
    </div>
  );
};

const MidiText = styled.textarea`
  font-size: 64pt;
  font-family: Arial;
`;

export default withMidiOutput(Fakebook);
