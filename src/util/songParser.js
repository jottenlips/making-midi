import * as tonal from "tonal";
import { repeat } from "ramda";

export const parseSong = ({ chords, octave, loop }) => {
  const loopedChords = repeat(chords, loop).join("|");
  const measures = loopedChords.split("|");
  const parsedChords = parseChords(measures);
  const song = appendProgressionDetails(parsedChords, octave);
  return song;
};

const parseChords = measures => {
  return measures
    .map(measure => measure.split(" "))
    .map(measure => measure.filter(chord => chord.length > 0));
};

const spreadOctave = index => (index % 2 === 0 ? 1 : 0);

const appendProgressionDetails = (chords, octave) => {
  return chords.map(measure =>
    measure.map(chord => ({
      notes: tonal.Chord.notes(chord).map(
        (note, index) => `${note}${octave + spreadOctave(index)}`
      ),
      octave,
      chord,
      duration: measure.length > 1 ? `2` : `1`
    }))
  );
};
