import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import midi from 'midi';
import Tone  from 'tone';
import { Scale, Chord } from "tonal";

// var now = Transport.now()
// // Transport.bpm.setValueAtTime(100, now);
// Transport.bpm.setValueAtTime(150, now);
// Transport.bpm.timeToTicks(6, now).toBarsBeatsSixteenths()

var synth = new Tone.PolySynth(6, Tone.Synth).toMaster();


console.log(Chord.notes("BbMaj"))
const chordNotes = Chord.notes("Bbm").map(note => `${note}4`);
const time = "4n";

var chord = new Tone.Event(function(time, chord){
	//the chord as well as the exact time of the event
  //are passed in as arguments to the callback function
      // synth.triggerAttackRelease(chord, "4n");
}, chordNotes);
//start the chord at the beginning of the transport timeline
chord.start();
//loop it every measure for 8 measures
chord.loop = 8;
chord.loopEnd = "1m";

// var seq = new Tone.Sequence( (time, note) => {
//     synth.triggerAttackRelease(note, "8n", time);
// }, songObj, time);

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
