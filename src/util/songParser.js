import * as tonal from "tonal";

// =>
// =>
// const chords = [{notes:Chord.notes("Am"), octave:4, measureLength:1, rate:4}, 
// {notes:Chord.notes("D7b9"), octave:4, measureLength:1, rate:4}]

export const parseSong = (rawChords, octave) => {
    const measures = rawChords.split('|');
    // console.log(measures);
    const chords = parseChords(measures);
    console.log(chords)
    const song = appendProgressionDetails(chords, octave);
    console.log(song);
    console.log(tonal.Chord.names(), "ALL CHORDS")

    return song;
}

const parseChords = (measures) => {
    return measures
        .map(measure => measure.split(' '))
        .map(measure => measure
            .filter(chord => chord.length > 0));
}

const appendProgressionDetails = (chords, octave) => {
    return chords.map(measure => measure.map( chord => ({
            notes:tonal.Chord.notes(chord),
            octave,
            chord,
            measureLength: (measure.length > 1) ? 1 : 2,
            // measureLength: 2,
            // rate: (measure.length > 1) ? 1 : 2
            rate: 2
        }))
    );
};

// parseSong('Am | AM');