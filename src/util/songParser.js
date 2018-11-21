const song_unparsed = `AM | D7b9 | EM | A7 Dm`
// =>
// =>
// const chords = [{notes:Chord.notes("Am"), octave:4, measureLength:1, rate:4}, 
// {notes:Chord.notes("D7b9"), octave:4, measureLength:1, rate:4}]


const parseSong = (rawChords, octave) => {
    const measures = rawChords.split('|');
    // console.log(measures);
    const chords = parseChords(measures);
    console.log(chords)
}

const parseChords = (measures) => {
    return measures
        .map(measure => measure.split(' '))
        .map(measure => measure
            .filter(chord => chord.length > 0));
}

parseSong(song_unparsed, 4);