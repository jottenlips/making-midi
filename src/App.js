import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import midi from 'midi';
import Tone  from 'tone';
import { Chord } from "tonal";
// import Math

const chordForOctave = (chord, octave) => {
  return chord.map(note => `${note}${octave}`);
}
const synth = new Tone.PolySynth(6, Tone.Synth).toMaster();

const song = [{notes:Chord.notes("Am"), octave:4, measureLength:1, rate:4}, 
{notes:Chord.notes("D7b9"), octave:4, measureLength:1, rate:4}, 
{notes:Chord.notes("GM"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("Gm"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("C7"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("FM"), octave:4, measureLength:1, rate:4},
{notes:Chord.notes("Fm"), octave:4, measureLength:1, rate:4}];

const parseSong = (song) => {
  const lengths = measureLengths(song);
  console.log(lengths)
  const markers = measureMarkers(lengths);
  console.log('markers', markers)
  generateChordSequence(song, markers);
  Tone.Transport.start();
}

const measureLengths = (song) => (song.map((accumulator) => {
    return parseInt(accumulator.measureLength);
    })
);

const measureMarkers = (measureLengths) => 
  (measureLengths.reduce((arr, current, index) =>
    (arr.push((index && arr[index - 1] || 0) + current), arr), []));

const generateChordSequence = (song, markers) => {
  song.map((chord, index) => {
    console.log(chord)
    chord.notes.map((note, jindex)=> {
      const event = new Tone.Event(function(time, pitch) {
        synth.triggerAttackRelease(pitch, `${chord.rate}n`, time);
      }, `${note}${3+jindex%2}`)
      event.start(`${markers[index]}m`);
      event.stop(`${markers[index]+chord.measureLength}m`);
      event.set({
        "loop" : true,
        "loopEnd" : "4n"
      });
    })
  });
}

parseSong(song);

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
