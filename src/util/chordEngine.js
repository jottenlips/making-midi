import Tone  from 'tone';
// import { Chord } from "tonal";

const synth = new Tone.PolySynth(6, Tone.Synth).toMaster();

const chordEngine = (song) => {
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
        "loopEnd" : `${chord.rate}n`
      });
    })
  });
}

export default chordEngine;