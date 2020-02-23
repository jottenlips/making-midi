import { repeat, slice, concat, reverse } from "ramda";

// const MidiWriter = require("midi-writer-js");
import MidiWriter from "midi-writer-js";

export const composeMidiFile = (
  chords,
  tempo,
  bassLine = false,
  solo = false
) => {
  const track = new MidiWriter.Track();
  const bassTrack = new MidiWriter.Track();
  const soloTrack = new MidiWriter.Track();

  // countIn &&
  //   track.addEvent(
  //     new MidiWriter.NoteEvent({
  //       pitch: "C5",
  //       duration: "4",
  //       repeat: 4
  //     })
  //   );
  // countIn &&
  //   bassTrack.addEvent(
  //     new MidiWriter.NoteEvent({
  //       pitch: "C5",
  //       duration: "4",
  //       repeat: 4
  //     })
  //   );

  const chordEvents = chords.map(chord =>
    // half length chord
    chord.duration === "2"
      ? repeat(
          new MidiWriter.NoteEvent({
            pitch: slice(1, Infinity, chord.notes),
            duration: "2"
          }),
          1
        )
      : // full length chord
        repeat(
          new MidiWriter.NoteEvent({
            pitch: slice(1, Infinity, chord.notes),
            duration: "1"
          }),
          1
        )
  );
  // track.addEvent(chordEvents);
  chordEvents.map(event => track.addEvent(event));

  bassLine &&
    chords.map(chord => {
      generateBassLine(chord, bassTrack);
    });

  chords.map(chord => {
    solo && generateSolo(chord, soloTrack);
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

const generateBassLine = (chord, track) => {
  return chord.duration === "2"
    ? (track.addEvent(
        new MidiWriter.NoteEvent({
          pitch: `${getRandomNote(chord.notes).charAt(0)}2`,
          duration: "4"
        })
      ),
      track.addEvent(
        new MidiWriter.NoteEvent({
          pitch: `${getRandomNote(chord.notes).charAt(0)}2`,
          duration: "4"
        })
      ))
    : (track.addEvent(
        new MidiWriter.NoteEvent({
          pitch: `${getRandomNote(chord.notes).charAt(0)}2`,
          duration: "4"
        })
      ),
      track.addEvent(
        new MidiWriter.NoteEvent({
          pitch: `${getRandomNote(chord.notes).charAt(0)}2`,
          duration: "4"
        })
      ),
      track.addEvent(
        new MidiWriter.NoteEvent({
          pitch: `${getRandomNote(chord.notes).charAt(0)}2`,
          duration: "4"
        })
      ),
      track.addEvent(
        new MidiWriter.NoteEvent({
          pitch: `${getRandomNote(chord.notes).charAt(0)}2`,
          duration: "4"
        })
      ));
};

const generateSolo = (chord, track) => {
  return chord.duration === "2"
    ? (track.addEvent(
        new MidiWriter.NoteEvent({
          pitch: `${getRandomNote(chord.notes).charAt(0)}2`,
          duration: "4"
        })
      ),
      track.addEvent(
        new MidiWriter.NoteEvent({
          pitch: `${getRandomNote(chord.notes).charAt(0)}2`,
          duration: "4"
        })
      ))
    : (track.addEvent(
        new MidiWriter.NoteEvent({
          pitch: `${getRandomNote(chord.notes).charAt(0)}2`,
          duration: "4"
        })
      ),
      track.addEvent(
        new MidiWriter.NoteEvent({
          pitch: `${getRandomNote(chord.notes).charAt(0)}2`,
          duration: "4"
        })
      ),
      track.addEvent(
        new MidiWriter.NoteEvent({
          pitch: `${getRandomNote(chord.notes).charAt(0)}2`,
          duration: "4"
        })
      ),
      track.addEvent(
        new MidiWriter.NoteEvent({
          pitch: `${getRandomNote(chord.notes).charAt(0)}2`,
          duration: "4"
        })
      ));
};
