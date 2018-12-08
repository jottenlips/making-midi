import React from 'react';
import chordEngine from '../util/chordEngine';
import { parseSong } from '../util/songParser';
import { compose, withState } from 'recompose';

const handleChange = (event, props) => {
    console.log(event.target.value, props)
    props.setChords(event.target.value);
}

const handleSubmit = (event, props) => {
    event.preventDefault();
    const song = parseSong(props.chords, 2);
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
