import { repeat, slice } from "ramda";

const MidiWriter = require("midi-writer-js");

export const composeMidiFile = (
  chords,
  tempo,
  bassLine = false,
  solo = false
) => {
  const track = new MidiWriter.Track();
  const drumTrack = new MidiWriter.Track();

  // countIn &&
  //   track.addEvent(
  //     new MidiWriter.NoteEvent({
  //       pitch: "C5",
  //       duration: "4",
  //       repeat: 4
  //     })
  //   );
  // countIn &&
  //   drumTrack.addEvent(
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
  // countIn &&
  chords.map(chord => {
    bassLine && getBassLine(chord, drumTrack);
  });

  track.setTempo(tempo || 120);
  const write = new MidiWriter.Writer([track, drumTrack]);
  console.log(write.dataUri());
  return write.dataUri();
};

const getBassLine = (chord, track) => {
  return chord.duration === "2"
    ? (track.addEvent(
        new MidiWriter.NoteEvent({
          pitch: `${chord.notes[0].charAt(0)}2`,
          duration: "4"
        })
      ),
      track.addEvent(
        new MidiWriter.NoteEvent({
          pitch: `${chord.notes[1].charAt(0)}2`,
          duration: "4"
        })
      ))
    : (track.addEvent(
        new MidiWriter.NoteEvent({
          pitch: `${chord.notes[0].charAt(0)}2`,
          duration: "4"
        })
      ),
      track.addEvent(
        new MidiWriter.NoteEvent({
          pitch: `${chord.notes[1].charAt(0)}2`,
          duration: "4"
        })
      ),
      track.addEvent(
        new MidiWriter.NoteEvent({
          pitch: `${chord.notes[2].charAt(0)}2`,
          duration: "4"
        })
      ),
      track.addEvent(
        new MidiWriter.NoteEvent({
          pitch: `${chord.notes[1].charAt(0)}2`,
          duration: "4"
        })
      ));
};
