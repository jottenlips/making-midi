import React, { Component } from 'react';
import logo from './logo.svg';
import chordEngine from './util/chordEngine';
import './App.css';
import { Chord } from "tonal";

const song = [{notes:Chord.notes("Am"), octave:4, measureLength:1, rate:4}, 
{notes:Chord.notes("D7b9"), octave:4, measureLength:1, rate:4}, 
{notes:Chord.notes("GM"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("Gm"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("C7"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("FM"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("Fm"), octave:4, measureLength:1, rate:4}];

chordEngine(song)

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
    );
  }
}

export default App;
