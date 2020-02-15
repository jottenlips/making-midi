import React, { useState } from "react";
import { parseSong } from "../util/songParser";
import "./chordInput.css";
import { composeMidiFile } from "../util/composeMidiFile";
import { flatten, curry, compose } from "ramda";
import { playMidi } from "../util/playMidi";

const handleSubmit = (event, setChords) => {
  event.preventDefault();
  const allChords = document.getElementById("chordInput").value;
  setChords(allChords);
  const chords = flatten(parseSong(allChords, 4));
  const midiDataUri = composeMidiFile(chords, 240);
  playMidi(midiDataUri);
};

const ChordInput = props => {
  const [chords, setChords] = useState("");
  return (
    <div>
      <form onSubmit={e => handleSubmit(e, setChords)}>
        <textarea
          id="chordInput"
          value={chords}
          onChange={e => setChords(e.target.value)}
        />
        <input type="submit" value="Play" />
      </form>
    </div>
  );
};

export default ChordInput;
