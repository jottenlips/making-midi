import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import midi from 'midi';
import Tone  from 'tone';

// var now = Transport.now()
// // Transport.bpm.setValueAtTime(100, now);
// Transport.bpm.setValueAtTime(150, now);
// Transport.bpm.timeToTicks(6, now).toBarsBeatsSixteenths()

var synth = new Tone.PolySynth(6, Tone.Synth).toMaster();
var synth2 = new Tone.PolySynth(6, Tone.Synth).toMaster();
var synth3 = new Tone.PolySynth(6, Tone.Synth).toMaster();
var synth4 = new Tone.PolySynth(6, Tone.Synth).toMaster();


const songObj = ["C3", ["C4", "C5"], ["G4", "D6"]];
const time = "4n";

var seq = new Tone.Sequence( (time, note) => {
    synth.triggerAttackRelease(note, "8n", time);
}, songObj, time);

const songObj2 = ["G4", "G4"];
const time2 = "4n";

var seq2 = new Tone.Sequence( (time, note) => {
    synth2.triggerAttackRelease(note, "4n", time);
}, songObj2, time2);

const songObj3 = ["E5", "E5"];
const time3 = "4n";

var seq3 = new Tone.Sequence( (time, note) => {
    synth3.triggerAttackRelease(note, "4n", time);
}, songObj3, time3);


// const progressionGenerator()


// seq.start(0);
// seq2.start(0);
// seq3.start(0);
Tone.Transport.start();


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
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
