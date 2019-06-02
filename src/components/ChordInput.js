import React from 'react';
// import chordEngine from '../util/chordEngine';
import { parseSong } from '../util/songParser';
import { compose, withState } from 'recompose';
import Tone from 'tone';
import './chordInput.css';
import { composeMidiFile } from '../util/composeMidiFile';
import { flatten } from 'ramda';

const handleChange = (event, props) => {
    props.setChords(event.target.value);
}

const handleSubmit = (event, props) => {
    event.preventDefault();
    const allChords = document.getElementById("myTextarea").value
    console.log(allChords, 'ALL CHORDS')
    props.setChords(allChords)
    const chords = flatten(parseSong(allChords, 4));
    const midiDataUri = composeMidiFile(chords, 120)
    console.log(chords, 'CHORDS')
    console.log(midiDataUri, 'MIDI');
}   
 
const ChordInput = props => {
    // let chordInput;
    return (
    <div>
  
      <form onSubmit={(e) => {handleSubmit(e, props)}}>
      <textarea id="myTextarea" >
        </textarea>
        {/* <input type="textArea" 
        width="100" height="100"
          ref={(chord) => chordInput = chord}
          placeholder="EbM7 | EbM7 | Ebm7 | Ebm7 | Ab7 | Fm7 | Fm7 | Abm7 | Db7 | Gm7 | F#m7 B7 | Fm7 |Bb7 | Gm7 | F#m7 B7 | Fm7 | Bb7" 
          onChange={(e) => {handleChange(e, props)}}
          /> */}
        
         <input type="submit" value="Play"/>
      </form>
      </div>
    );
}

export default compose(
    withState('chords', 'setChords', "")
)(ChordInput);
