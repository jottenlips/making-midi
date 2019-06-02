import { props } from 'tonal-interval';

var MidiWriter = require('midi-writer-js');
// var MidiPlayer = require('midi-player-js');

// Start with a new track
export const composeMidiFile = (chords, tempo) => {
    const track = new MidiWriter.Track();
    // Define an instrument (optional):
    // track.addEvent(new MidiWriter.ProgramChangeEvent({instrument : 1}));

    const chordEvents = chords.map(chord => new MidiWriter.NoteEvent({
            pitch: chord.notes,
            duration: chord.duration
    }))
    console.log(chordEvents)
    track.addEvent(chordEvents)
    const write = new MidiWriter.Writer(track);
    console.log(write.dataUri());
    return write.dataUri();
}


// // Initialize player and register event handler
// var Player = new MidiPlayer.Player(function(event) {
//     console.log(event);
// });
 
// // Load a MIDI file
// Player.loadDataUri(write.dataUri());
// Player.play();

// export default Player