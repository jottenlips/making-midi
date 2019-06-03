import React from 'react';
import { parseSong } from '../util/songParser';
import { compose, withState } from 'recompose';
import './chordInput.css';
import { composeMidiFile } from '../util/composeMidiFile';
import { flatten } from 'ramda';
import { playMidi } from '../util/playMidi';

const handleSubmit = async (event, props) => {
    event.preventDefault();
    const allChords = document.getElementById("myTextarea").value
    console.log(allChords, 'ALL CHORDS')
    props.setChords(allChords)
    const chords = flatten(parseSong(allChords, 4));
    const midiDataUri = composeMidiFile(chords, 240)
    console.log(chords, 'CHORDS')
    console.log(midiDataUri, 'MIDI');
    playMidi(midiDataUri);
}   
 
const ChordInput = props => {
    return (
    <div>
      <form onSubmit={(e) => {handleSubmit(e, props)}}>
      <textarea id="myTextarea" >
        </textarea>
         <input type="submit" value="Play"/>
      </form>
      </div>
    );
}

export default compose(
    withState('chords', 'setChords', "")
)(ChordInput);
