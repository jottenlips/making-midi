import Tone  from 'tone';
var chorus = new Tone.Chorus(4, 2.5, 0.5);
var pingPong = new Tone.PingPongDelay("16n", 0.2).toMaster();
const synth = new Tone.PolySynth(6, Tone.Synth).toMaster()

const chordEngine = (song, bpm) => {
  const now = Math.ceil(Tone.now()*10);
  Tone.Transport.bpm.value = bpm || 120;
  const lengths = measureLengths(song);
  const markers = [4 , ...measureMarkers(lengths).map(val => val + 4)];
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
    chord.notes.map((note, jindex) => {
      const event = new Tone.Event(function(time, pitch) {
        synth.triggerAttackRelease(pitch, `${chord.rate}n`, time);
      }, `${note}${chord.octave+jindex%2}`)
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