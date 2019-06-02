// Initialize player and register event handler
const MidiPlayer = require('midi-player-js');
const Player = new MidiPlayer.Player();

export const playMidiDataUri = (data) => {
    Player.loadDataUri(data);
    Player.play();
}