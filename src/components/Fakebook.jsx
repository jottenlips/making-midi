import React, { useState } from "react";
import { parseSong } from "../util/songParser";
import { composeMidiFile } from "../util/composeMidiFile";
import { flatten } from "ramda";
import { playMidi } from "../util/playMidi";
import styled from "styled-components";

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
    <div
      style={{
        width: "100vh",
        height: "100vh",
        alignItems: "center",
        paddingTop: 100
      }}
    >
      <form onSubmit={e => handleSubmit(e, setChords, chords)}>
        <JazzText value={chords} onChange={e => setChords(e.target.value)} />
        <input type="submit" value="Play" />
      </form>
    </div>
  );
};

const JazzText = styled.textarea`
  font-size: 64pt;
`;

//   font-family: Boogaloo-Regular;

export default styled(Fakebook)``;
