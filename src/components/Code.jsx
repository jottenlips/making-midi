import React from "react";
import { SynthBox } from "./Box";
import { SmallCanvas } from "./ThreeDCanvas";
import styled from "styled-components";

export const Code = props => {
  const rawWebMidiAPICodeBlock = `
navigator.requestMIDIAccess()
  .then(onMIDISuccess);

const onMIDISuccess = (webMidiAPI) => {
    console.log(webMidiAPI.inputs, webMidiAPI.outputs);
    const inputs = webMidiAPI.inputs
    inputs.map(input => {
        input.value.onmidimessage = onMIDIMessage;
    })
}

const noteOn = (midiNote, velocity) => {
    // Use a Web Audio API or library 
    // to play the note
    // or update your UI
    play(midiNote, velocity)
}

const onMIDIMessage = (event) => {
    const data = event.data,
    const [type, note, velocity] = data,

    type === 144 && noteOn(note, velocity);
    type === 128 && noteOff(note, velocity);
}

// This project does not use the Web MIDI API directly. 
// Instead I use a bunch of libraries. This is JS afterall.
`;

  const webMidiJsCodeBlock = `
import WebMidi from "webmidi";

WebMidi.enable(() => {

    // Easily get inputs and outputs
    console.log(WebMidi.inputs);
    console.log(WebMidi.outputs);

    const input = WebMidi.getInputById(
        WebMidi.inputs[0]._midiInput.id
    );

    const output = WebMidi.getOutputById(
        WebMidi.outputs[0]._midiOutput.id
    );

    // much easier to implement a noteon
    input.addListener("noteon", "all", e => {

        const note = e.note.name + e.note.octave;

        // Play with instrument or use the note 
        // to control a display
        synth.triggerAttackRelease(note, 0.5);
    });
});
    `;

  const writingMidiFileCodeBlock = `
  import MidiWriter from "midi-writer-js";

  const track = new MidiWriter.Track();

  // Add a BbMaj9 chord
  new MidiWriter.NoteEvent({
    pitch: ['Bb4', 'D5', 'A5', 'C5'],
    duration: "1"
  })

  // Add as many tracks as you want
  const midiFile = new MidiWriter.Writer([track]);

  // You can use the data uri with other libraries
  // to play back MIDI and perform any code in time with
  // the MIDI.
  // Or you can directly download it and play the file in your 
  // favoroite software.

  midiFile.dataUri();
  `;

  const midiOutputCodeBlock = `
import MidiPlayer from "midi-player-js";

const ac = new AudioContext();

  // output from previous code block
  // this output is your synthesizer
  // data uri from midi writer

  export const playMidi = async (dataUri, output) => {

    const Player = new MidiPlayer.Player(event => {

      // AudioContext is important for scheduling
      const time = ac.currentTime;

      // This can be any MIDI event
      // This is the block in which the music is played
      event.name === "Note on" && output && 
            output.playNote(event.noteName, "all", { time })
    });

    Player.loadDataUri(dataUri);
    Player.play();
  };
`;

  const citations = `
Citations and Further reading:
https://webaudio.github.io/web-midi-api/
https://www.keithmcmillen.com/blog/making-music-in-the-browser-web-midi-api/
https://github.com/djipco/webmidi
https://www.smashingmagazine.com/2018/03/web-midi-api/
https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/currentTime

Other libraries used
React.js
styled-components 
Tonal (music theory) https://github.com/tonaljs/tonal
react-three-fiber (threejs for react) https://github.com/react-spring/react-three-fiber
Tone.js (synthesizers) https://tonejs.github.io/
`;

  return (
    <div style={{ paddingTop: 90 }}>
      <div style={{
        // display: 'flex',
        // justifyContent: "center",
        // alignItems: 'center',
        // padding: 20,
        // flexDirection: 'column',
      }}>

        <CodeTitle>Web Midi API</CodeTitle>
        <CodeSnippet>
          {rawWebMidiAPICodeBlock}
        </CodeSnippet>
        <SmallCanvas>
          <SynthBox
            noteEvent={props.noteEvent}
            activationNotes={["C", "D", "F", "G", "B", "E", "F"]}
            notes={["A4", "C5", "D3", "E4", "G4", "A3", "C4", "D5", "E4", "G4"]}
            position={[0, -0.5, 3]}
          />
        </SmallCanvas>
        <CodeTitle>webmidi.js</CodeTitle>
        <CodeSnippet>
          {webMidiJsCodeBlock}
        </CodeSnippet>
        <SmallCanvas>
          <SynthBox
            noteEvent={props.noteEvent}
            activationNotes={["C", "D", "F", "G", "B", "E", "F"]}
            notes={["A4", "C5", "D3", "E4", "G4", "A3", "C4", "D5", "E4", "G4"]}
            position={[0, -0.5, 3]}
          />
        </SmallCanvas>
        <CodeTitle>midiwriter.js</CodeTitle>
        <CodeSnippet>
          {writingMidiFileCodeBlock}
        </CodeSnippet>
        <SmallCanvas>
          <SynthBox
            noteEvent={props.noteEvent}
            activationNotes={["C", "D", "F", "G", "B", "E", "F"]}
            notes={["A4", "C5", "D3", "E4", "G4", "A3", "C4", "D5", "E4", "G4"]}
            position={[0, -0.5, 3]}
          />
        </SmallCanvas>
        <CodeTitle>midiplayer.js</CodeTitle>
        <CodeSnippet>
          {midiOutputCodeBlock}
        </CodeSnippet>
        <SmallCanvas>
          <SynthBox
            noteEvent={props.noteEvent}
            activationNotes={["C", "D", "F", "G", "B", "E", "F"]}
            notes={["A4", "C5", "D3", "E4", "G4", "A3", "C4", "D5", "E4", "G4"]}
            position={[0, -0.5, 3]}
          />
        </SmallCanvas>
        <CodeSnippet>
          {citations}
          </CodeSnippet>
        </div>
      </div>
  );
};

const CodeSnippet = styled.p`
  background-color: #000000;
  border-radius: 10px;
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  white-space: pre;
  font-size: 16px;
  word-wrap: break-word;
`;


const CodeTitle = styled.p`
  color: #ffffff;
  font-size: 24pt;
  text-align: left;
  user-select: none;
`;
