
import * as Tone from 'tone';
import Midi from '@tonejs/midi'


export const playMidi = async (dataUri) => {
    const midi = await Midi.fromUrl(dataUri)
    console.log(midi)
    const now = Tone.now() + 4

    return midi.tracks.map(track => {
        var synth = new Tone.PolySynth(6, Tone.Synth).toMaster();
        return Promise.all(track.notes.map(note => {
            console.log(note.name, note.time)
            return synth.triggerAttackRelease(note.name, note.duration, note.time + now)
        }))
        // return synth.triggerAttackRelease(track.notes, "4n");

    
    })
    
}

//   Tone.Transport.start();
