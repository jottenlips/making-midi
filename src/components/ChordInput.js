import React from 'react';
import chordEngine from '../util/chordEngine';
import { parseSong } from '../util/songParser';
import { compose, withState } from 'recompose';
import Tone from 'tone';
import './chordInput.css';

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
    props.setChords(document.getElementById("myTextarea").value)
    event.preventDefault();
    const song = parseSong(props.chords, 4);
    const chords = song.flatMap(chord => chord);
    chordEngine(chords, 240);
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
        
         <input type="submit" value="Play" onChange={(e) => {handleChange(e, props)}}/>
      </form>
      </div>
    );
}

export default compose(
    withState('chords', 'setChords', "")
)(ChordInput);
