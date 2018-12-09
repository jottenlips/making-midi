import React from 'react';
import chordEngine from '../util/chordEngine';
import { parseSong } from '../util/songParser';
import { compose, withState } from 'recompose';
import Tone from 'tone';

const handleChange = (event, props) => {
    props.setChords(event.target.value);
}

const handleSubmit = (event, props) => {
    Tone.Transport.seconds = 0;
    console.log(Tone.Transport)
    if (Tone.Transport._scheduledEvents) {
        // turn into util resetTransport.js
        Object.keys(Tone.Transport._scheduledEvents).map(eventId => Tone.Transport.clear(eventId));
    }
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
