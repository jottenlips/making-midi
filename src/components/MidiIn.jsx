import React from "react";
import { SynthBox } from "./Box";
import { ThreeDCanvas } from "./ThreeDCanvas";
import { reverse } from "ramda";
export const MidiIn = props => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: "100%",
      paddingTop: 90,
      alignItems: "center"
    }}>
      {props.midiIns && props.midiIns.length === 0 && <p>Please plugin a midi controller</p>}

      <div style={{ justifyContent: "space-between" }}>
        <select>
          {props.midiIns &&
            props.midiIns.map(input => (
              <option
                value={input._midiInput.id}
                onChange={() => props.setMidiInId(input._midiInput.id)}
              >
                {input._midiInput.name}
              </option>
            ))}
        </select>
      </div>
      <ThreeDCanvas>
        <SynthBox
          midiIn={props.midiIn}
          noteEvent={props.noteEvent}
          activationNotes={["C", "D", "F", "G", "B", "E", "F"]}
          notes={["A4", "C5", "D3", "E4", "G4", "A3", "C4", "D5", "E4", "G4"]}
          position={[-3, -0.5, 0]}
        />
        <SynthBox
          midiIn={props.midiIn}
          noteEvent={props.noteEvent}
          activationNotes={["C", "D", "F", "G", "B", "E", "F"]}
          notes={["A4", "C5", "D3", "E4", "G4", "A3", "C4", "D5", "E4", "G4"]}
          position={[1, 0, 0]}
        />
        <SynthBox
          midiIn={props.midiIn}
          noteEvent={props.noteEvent}
          activationNotes={reverse(["C", "D", "F", "G", "B", "E", "F"])}
          notes={reverse([
            "A4",
            "C5",
            "D3",
            "E4",
            "G4",
            "A3",
            "C4",
            "D5",
            "E4",
            "G4"
          ])}
          position={[-2, 3, 0]}
        />
        <SynthBox
          midiIn={props.midiIn}
          noteEvent={props.noteEvent}
          activationNotes={["Bb", "Ab", "D", "F", "E", "F", "G"]}
          notes={["A4", "C5", "D3", "E4", "G4", "A3", "C4", "D5", "E4", "G4"]}
          position={[-3, 2, 0]}
        />
        <SynthBox
          midiIn={props.midiIn}
          noteEvent={props.noteEvent}
          activationNotes={reverse(["Bb", "Ab", "D", "F", "E", "F", "G"])}
          notes={reverse([
            "A4",
            "C5",
            "D3",
            "E4",
            "G4",
            "A3",
            "C4",
            "D5",
            "E4",
            "G4"
          ])}
          position={[-1, 1, 0]}
        />
        <SynthBox
          midiIn={props.midiIn}
          noteEvent={props.noteEvent}
          activationNotes={["E", "Gb", "C", "D", "B", "Bb", "Eb"]}
          notes={["A4", "C5", "D3", "E4", "G4", "A3", "C4", "D5", "E4", "G4"]}
          position={[1, -1, 0]}
        />
        <SynthBox
          midiIn={props.midiIn}
          noteEvent={props.noteEvent}
          activationNotes={reverse(["E", "Gb", "C", "D", "B", "Bb", "Eb"])}
          notes={["A4", "C5", "D3", "E4", "G4", "A3", "C4", "D5", "E4", "G4"]}
          position={[1, -1, 0]}
        />
        <SynthBox
          midiIn={props.midiIn}
          noteEvent={props.noteEvent}
          activationNotes={["Eb", "Gb", "C", "A", "C", "D", "B"]}
          notes={["A4", "C5", "D3", "E4", "G4", "A3", "C4", "D5", "E4", "G4"]}
          position={[-2, -1, 1]}
        />
        <SynthBox
          midiIn={props.midiIn}
          noteEvent={props.noteEvent}
          activationNotes={reverse(["Eb", "Gb", "C", "A", "C", "D", "B"])}
          notes={["A4", "C5", "D3", "E4", "G4", "A3", "C4", "D5", "E4", "G4"]}
          position={[-2, -1, 1]}
        />
        <SynthBox
          midiIn={props.midiIn}
          noteEvent={props.noteEvent}
          activationNotes={["D", "E", "C", "G", "Eb", "Gb", "C"]}
          notes={["A4", "C5", "D3", "E4", "G4", "A3", "C4", "D5", "E4", "G4"]}
          position={[-3, -1, 1]}
        />
        <SynthBox
          midiIn={props.midiIn}
          noteEvent={props.noteEvent}
          activationNotes={reverse(["D", "E", "C", "G", "Eb", "Gb", "C"])}
          notes={["A4", "C5", "D3", "E4", "G4", "A3", "C4", "D5", "E4", "G4"]}
          position={[-4, 3, 1]}
        />
        <SynthBox
          midiIn={props.midiIn}
          noteEvent={props.noteEvent}
          activationNotes={["D", "C", "E", "Gb", "C", "G", "Eb"]}
          notes={reverse([
            "A4",
            "C5",
            "D3",
            "E4",
            "G4",
            "A3",
            "C4",
            "D5",
            "E4",
            "G4"
          ])}
          position={[-4, 3, 1]}
        />
        <SynthBox
          midiIn={props.midiIn}
          noteEvent={props.noteEvent}
          activationNotes={reverse(["D", "E", "C", "G", "Eb", "Gb", "C"])}
          notes={["A4", "C5", "D3", "E4", "G4", "A3", "C4", "D5", "E4", "G4"]}
          position={[-4, 3, 1]}
        />
      </ThreeDCanvas>
    </div>
  );
};
