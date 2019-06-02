import * as tonal from "tonal";

export const parseSong = (rawChords, octave) => {
    const measures = rawChords.split('|');
    const chords = parseChords(measures);
    const song = appendProgressionDetails(chords, octave);
    return song;
}

const parseChords = (measures) => {
    return measures
        .map(measure => measure.split(' '))
        .map(measure => measure
            .filter(chord => chord.length > 0));
}

const appendProgressionDetails = (chords, octave) => {
    return chords.map(measure => measure.map(chord => ({
            notes: tonal.Chord.notes(chord),
            octave,
            chord,
            duration: (measure.length > 1) ? 2 : 4
        }))
    );
};