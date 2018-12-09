import React from 'react';
import chordEngine from '../util/chordEngine';
import { parseSong } from '../util/songParser';
import { compose, withState } from 'recompose';
import Tone from 'tone';

const handleChange = (event, props) => {
    props.setChords(event.target.value);
}

const handleSubmit = (event, props) => {
    // Tone.context.close();
    Tone.Transport.seconds = 0;
    console.log(Tone.Transport)
    if (Tone.Transport._scheduledEvents) {
        Object.keys(Tone.Transport._scheduledEvents).map(eventId => Tone.Transport.clear(eventId));
        // Tone.Transport.events.map(event => console.log(event.id))
        // Tone.Transport.events.map(event => Tone.Transport.clear(event.id))
    }

    // Tone.context = new AudioContext();
    // if (Tone.transport) { console.log("STAHHP"); Tone.transport.stop(); }
    event.preventDefault();
    const song = parseSong(props.chords, 4);
    const chords = song.flatMap(chord => chord);
    chordEngine(chords, 700);
}   
 
const ChordInput = props => {
    let chordInput;
    return (
      <form onSubmit={(e) => {handleSubmit(e, props)}}>
        <input type="text" 
          ref={(chord) => chordInput = chord}
          placeholder="chords" 
          onChange={(e) => {handleChange(e, props)}}
          />
        <input type="submit" value="Play" />
      </form>
    );
}

export default compose(
    withState('chords', 'setChords', "")
)(ChordInput);
