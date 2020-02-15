const MidiPlayer = require("midi-player-js");
const Soundfont = require("soundfont-player");
const ac = new AudioContext();

export const playMidi = async dataUri => {
  Soundfont.instrument(
    ac,
    "https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/FatBoy/acoustic_grand_piano-mp3.js"
  ).then(instrument => {
    const Player = new MidiPlayer.Player(event => {
      const time = ac.currentTime;
      console.log(event);
      event.name === "Note on"
        ? instrument.play(event.noteName, time, { gain: event.velocity / 4 })
        : console.log(event);
    });
    Player.loadDataUri(dataUri);
    Player.play();
  });
};

export const playMidiThroughOutput = async (dataUri, output) => {
  const Player = new MidiPlayer.Player(event => {
    console.log(output);
    const time = ac.currentTime;
    console.log(event);
    event.name === "Note on" && output
      ? output.playNote(event.noteName, "all", { duration: time * 100 })
      : console.log(event);
  });
  Player.loadDataUri(dataUri);
  Player.play();
};
