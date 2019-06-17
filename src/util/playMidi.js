const MidiPlayer = require('midi-player-js');
const Soundfont = require('soundfont-player');
const ac = new AudioContext()

export const playMidi = async (dataUri) => {
    Soundfont.instrument(ac, 
        'https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/FatBoy/acoustic_grand_piano-mp3.js')
        .then((instrument) => {
        const Player = new MidiPlayer.Player(function(event) {
            const time = ac.currentTime
            console.log(event)
            event.name === 'Note on' ? instrument.play(event.noteName, time, {gain:event.velocity/4}) : console.log(event);
        })
        Player.loadDataUri(dataUri);
        Player.play();
    });
  
}


