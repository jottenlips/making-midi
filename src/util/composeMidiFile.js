const MidiWriter = require("midi-writer-js");

export const composeMidiFile = (chords, tempo) => {
  const track = new MidiWriter.Track();
  const chordEvents = chords.map(
    chord =>
      new MidiWriter.NoteEvent({
        pitch: chord.notes,
        duration: chord.duration
      })
  );
  console.log(chords);
  console.log(chordEvents);
  track.addEvent(chordEvents);
  track.setTempo(tempo || 120);
  const write = new MidiWriter.Writer(track);
  console.log(write.dataUri());
  return write.dataUri();
};
