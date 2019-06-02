// Initialize player and register event handler
const MidiPlayer = require('midi-player-js');

export const playMidiDataUri = (data) => {
    const Player = new MidiPlayer.Player(function(event) {
        console.log(event);
    });    
    Player.loadFile(data);
    Player.reset();
    Player.play();
}