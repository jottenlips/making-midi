import { slice, concat, reverse } from "ramda";

import MidiWriter from "midi-writer-js";

export const composeMidiFile = (chords, tempo, bassLine = false) => {
  const track = new MidiWriter.Track();
  const bassTrack = new MidiWriter.Track();

  const chordEvents = chords.map(chord =>
    // half length chord
    chord.duration === "2"
      ? new MidiWriter.NoteEvent({
          pitch: slice(1, Infinity, chord.notes),
          duration: "2"
        })
      : // full length chord
        new MidiWriter.NoteEvent({
          pitch: slice(1, Infinity, chord.notes),
          duration: "1"
        })
  );
  chordEvents.map(event => track.addEvent(event));

  bassLine &&
    chords.map(chord => {
      generateBassLine(chord, bassTrack);
    });

  track.setTempo(tempo || 120);
  const write = new MidiWriter.Writer([track, bassTrack]);
  console.log(write.dataUri());
  return write.dataUri();
};

const getRandomNote = notes => {
  //root note most probable
  const weightedNotes = distributeNoteProbability(reverse(notes));
  // then 3rd
  const w2 = distributeNoteProbability(weightedNotes);
  // then 5th
  const w3 = distributeNoteProbability(w2);
  return w3[Math.floor(Math.random() * w3.length)];
};

const distributeNoteProbability = notes =>
  concat(notes, slice(1, Infinity, notes));

const addRandomNoteToTrack = (chord, track, length) => {
  track.addEvent(
    new MidiWriter.NoteEvent({
      pitch: `${getRandomNote(chord.notes).charAt(0)}3`,
      duration: length
    })
  );
};

const generateBassLine = (chord, track) => {
  return chord.duration === "2"
    ? new Array(2).fill().map(() => addRandomNoteToTrack(chord, track, "4"))
    : new Array(4).fill().map(() => addRandomNoteToTrack(chord, track, "4"));
};
