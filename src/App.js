import React, { Component } from 'react';
import logo from './logo.svg';
import chordEngine from './util/chordEngine';
import { parseSong } from './util/songParser';
import './App.css';
import * as tonal from "tonal";

const song_unparsed = `D7b9 | D13 | C6 | Co Dbm`

const song = parseSong(song_unparsed, 3);
console.log(song)
// need to figure out how to split measures.
const chords = song.flatMap(chord => chord);
console.log(chords);
chordEngine(chords, 700);

const App = () =>  {
    return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {chords.map(chord =>
            (<p> {chord.notes}  </p>))} 
        </p>
      </header>
    </div>
  );
}

export default App;
