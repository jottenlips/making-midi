
import * as Tone from 'tone';
import Midi from '@tonejs/midi'


export const playMidi = async (dataUri) => {
    const midi = await Midi.fromUrl(dataUri)
    console.log(midi)
    const now = Tone.now() + 0.5
    midi.tracks.map(track => {
        const synth = new Tone.PolySynth(10, Tone.Synth, {
            envelope: {
                attack: 0.02,
                decay: 0.1,
                sustain: 0.3,
                release: 1
            }
        }).toMaster()
        track.notes.forEach(note => {
            synth.triggerAttackRelease(note.name, note.duration, note.time + now, note.velocity)
        })
    })
}