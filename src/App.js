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

const song = [{notes:Chord.notes("Bbm"), octave:4, measureLength:2, rate:4, index:0}, 
{notes:Chord.notes("BbM"), octave:4, measureLength:4, rate:4}, 
{notes:Chord.notes("BbM"), octave:4, measureLength:4, rate:4},
{notes:Chord.notes("AM"), octave:4, measureLength:4, rate:4},
{notes:Chord.notes("Am"), octave:4, measureLength:4, rate:4},
{notes:Chord.notes("BbM"), octave:4, measureLength:4, rate:4}];

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

const measureMarkers = (measureLengths) => [0,
  ...(measureLengths.reduce((arr, current, index) =>
    (arr.push((index && arr[index - 1] || 0) + current), arr), []))];

const generateChordSequence = (song, markers) => {
  song.map((chord, index) => {
    chord.notes.map(note => {
      const event = new Tone.Event(function(time, pitch) {
        console.log(note)
        synth.triggerAttackRelease(pitch, "4n", time);
      }, `${note}4`)
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

// const notes = Chord.notes("Bbm");
// const chordNotes = chordForOctave(notes, '4');

// const notes2 = Chord.notes("BbM");
// const chordNotes2 = chordForOctave(notes2, '4');

// const length = "4m";
// Tone.Transport.bpm.value = 100
// const rate = '4n'
// var loop = new Tone.Loop(function(time){
// 	//triggered every eighth note. 
//   // synth.triggerAttackRelease(chordNotes, rate);
// }, rate).start(0);
// loop.stop(length);

// var loop2 = new Tone.Loop(function(time){
// 	//triggered every eighth note. 
//   // synth.triggerAttackRelease(chordNotes2, rate);
// }, rate).start('4m');
// loop2.stop('8m');

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
