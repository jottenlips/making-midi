import { repeat } from "ramda";

const MidiWriter = require("midi-writer-js");

export const composeMidiFile = (chords, tempo, countIn = false) => {
  const track = new MidiWriter.Track();

  countIn &&
    track.addEvent(
      new MidiWriter.NoteEvent({
        pitch: "C5",
        duration: "4",
        repeat: 4
      })
    );

  const chordEvents = chords.map(chord =>
    // half length chord
    chord.duration === "2"
      ? repeat(
          new MidiWriter.NoteEvent({
            pitch: chord.notes,
            duration: "4"
          }),
          1
        )
      : // full length chord
        repeat(
          new MidiWriter.NoteEvent({
            pitch: chord.notes,
            duration: "1"
          }),
          1
        )
  );

  console.log(chords);
  console.log(chordEvents);
  // track.addEvent(chordEvents);
  chordEvents.map(event => track.addEvent(event));
  track.setTempo(tempo || 120);
  const write = new MidiWriter.Writer(track);
  console.log(write.dataUri());
  return write.dataUri();
};
