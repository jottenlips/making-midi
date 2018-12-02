import React, { Component } from 'react';
import logo from './logo.svg';
import chordEngine from './util/chordEngine';
import { parseSong } from './util/songParser';
import './App.css';
import * as tonal from "tonal";

const song_unparsed = `AM | Am | Dm DM `

const song = parseSong(song_unparsed, 4);
console.log(song)
// need to figure out how to split measures.
const chords = song.flatMap(chord => chord);
console.log(chords);
chordEngine(chords);

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
