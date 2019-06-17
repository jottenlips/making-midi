const MidiPlayer = require('midi-player-js');
const Soundfont = require('sounfont-player');
var ac = new AudioContext()

export const playMidi = async (dataUri) => {
   
    var Player = new MidiPlayer.Player(function(event) {
        Soundfont.instrument(ac, 
            'https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/MusyngKite/acoustic_guitar_nylon-mp3.js')
                .then((instrument) => {
            if (event.name == 'Note on') {
                instrument.play(event.noteName, ac.currentTime, {gain:event.velocity/100});
            }
        })
    });
    Player.loadDataUri(dataUri);
    Player.play();
}


