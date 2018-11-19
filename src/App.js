import React, { Component } from 'react';
import logo from './logo.svg';
import chordEngine from './util/chordEngine';
import './App.css';
import { Chord } from "tonal";

const chords = [{notes:Chord.notes("Am"), octave:4, measureLength:1, rate:4}, 
{notes:Chord.notes("D7b9"), octave:4, measureLength:1, rate:4}, 
{notes:Chord.notes("GM"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("Gm"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("C7"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("FM"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("Fm"), octave:4, measureLength:1, rate:4},{notes:Chord.notes("Am"), octave:4, measureLength:1, rate:4}, 
{notes:Chord.notes("D7b9"), octave:4, measureLength:1, rate:4}, 
{notes:Chord.notes("GM"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("Gm"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("C7"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("FM"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("Fm"), octave:4, measureLength:1, rate:4},{notes:Chord.notes("Am"), octave:4, measureLength:1, rate:4}, 
{notes:Chord.notes("D7b9"), octave:4, measureLength:1, rate:4}, 
{notes:Chord.notes("GM"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("Gm"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("C7"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("FM"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("Fm"), octave:4, measureLength:1, rate:4},{notes:Chord.notes("Am"), octave:4, measureLength:1, rate:4}, 
{notes:Chord.notes("D7b9"), octave:4, measureLength:1, rate:4}, 
{notes:Chord.notes("GM"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("Gm"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("C7"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("FM"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("Fm"), octave:4, measureLength:1, rate:4},{notes:Chord.notes("Am"), octave:4, measureLength:1, rate:4}, 
{notes:Chord.notes("D7b9"), octave:4, measureLength:1, rate:4}, 
{notes:Chord.notes("GM"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("Gm"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("C7"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("FM"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("Fm"), octave:4, measureLength:1, rate:4}];

chordEngine(chords)

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {chords.map(chord => 
              chord.notes)} 
          </p>

        </header>
      </div>
    );
  }
}

export default App;
