const MidiWriter = require("midi-writer-js");

export const composeMidiFile = (chords, tempo) => {
  const track = new MidiWriter.Track();
  const chordEvents = chords.map(chord =>
    chord.duration === "2"
      ? [
          new MidiWriter.NoteEvent({
            pitch: chord.notes,
            duration: "8"
          }),
          new MidiWriter.NoteEvent({
            pitch: chord.notes,
            duration: "8"
          })
        ]
      : [
          new MidiWriter.NoteEvent({
            pitch: chord.notes,
            duration: "8"
          }),
          new MidiWriter.NoteEvent({
            pitch: chord.notes,
            duration: "8"
          }),
          new MidiWriter.NoteEvent({
            pitch: chord.notes,
            duration: "8"
          }),
          new MidiWriter.NoteEvent({
            pitch: chord.notes,
            duration: "8"
          })
        ]
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
