
import * as Tone from 'tone';
import Midi from '@tonejs/midi'


export const playMidi = async (dataUri) => {
    const midi = await Midi.fromUrl(dataUri)
    console.log(midi)
    const now = Tone.now() + 3
    const tracks = midi.tracks.map(track => {
        const synth = new Tone.PolySynth(6, Tone.Synth).toMaster();
        track.notes.forEach(note => {
            console.log(note.name, note.time)
            return synth.triggerAttackRelease(note.name, note.duration, note.time + now)
        })
    })
}