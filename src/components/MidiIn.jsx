import React from "react";
import { SynthBox } from "./Box";
import { ThreeDCanvas } from "./ThreeDCanvas";

export const MidiIn = props => {
  return (
    <div style={{ width: "100vh", height: "100vh", alignItems: "center" }}>
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
          noteEvent={props.noteEvent}
          activationNotes={["C", "D", "F", "G", "B", "E", "F"]}
          notes={["A4", "C5", "D3", "E4", "G4", "A3", "C4", "D5", "E4", "G4"]}
          position={[1, 0, 0]}
        />
        <SynthBox
          noteEvent={props.noteEvent}
          activationNotes={["Bb", "Ab", "D", "F", "E", "F", "G"]}
          notes={["A4", "C5", "D3", "E4", "G4", "A3", "C4", "D5", "E4", "G4"]}
          position={[1, 1, 0]}
        />
        <SynthBox
          noteEvent={props.noteEvent}
          activationNotes={["E", "Gb", "C", "D", "B", "Bb", "Eb"]}
          notes={["A4", "C5", "D3", "E4", "G4", "A3", "C4", "D5", "E4", "G4"]}
          position={[1, -1, 0]}
        />
        <SynthBox
          noteEvent={props.noteEvent}
          activationNotes={["Eb", "Gb", "C", "A", "C", "D", "B"]}
          notes={["A4", "C5", "D3", "E4", "G4", "A3", "C4", "D5", "E4", "G4"]}
          position={[-2, -1, 1]}
        />
        <SynthBox
          noteEvent={props.noteEvent}
          activationNotes={["D", "E", "C", "G", "Eb", "Gb", "C"]}
          notes={["A4", "C5", "D3", "E4", "G4", "A3", "C4", "D5", "E4", "G4"]}
          position={[-3, -1, 1]}
        />
      </ThreeDCanvas>
    </div>
  );
};
