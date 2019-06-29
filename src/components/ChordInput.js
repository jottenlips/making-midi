import React from 'react';
import { parseSong } from '../util/songParser';
import { compose, withState } from 'recompose';
import './chordInput.css';
import { composeMidiFile } from '../util/composeMidiFile';
import { flatten } from 'ramda';
import { playMidi } from '../util/playMidi';

const handleSubmit = curry((event, props) => {
    event.preventDefault();
    const allChords = document.getElementById("chordInput").value
    props.setChords(allChords)
    const chords = flatten(parseSong(allChords, 4));
    const midiDataUri = composeMidiFile(chords, 240)
    playMidi(midiDataUri);
})
 
const ChordInput = props => {
    return (
    <div>
      <form onSubmit={handleSubmit(props)}>
      <textarea id="chordInput" />
        <input type="submit" value="Play"/>
      </form>
      </div>
    );
}

export default compose(
    withState('chords', 'setChords', "")
)(ChordInput);
