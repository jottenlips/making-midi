(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(21),r=n.n(o),c=(n(50),n(52),n(7)),l=n(19),u=n(11),s=n(1),m=n(75),d=n(106),p=function(e){var t=e.chords,n=e.octave,a=e.loop,i=Object(d.a)(t,a).join("|").split("|"),o=b(i);return E(o,n)},b=function(e){return e.map(function(e){return e.split(" ")}).map(function(e){return e.filter(function(e){return e.length>0})})},E=function(e,t){return e.map(function(e){return e.map(function(n){return{notes:m.a.notes(n).map(function(e,n){return"".concat(e).concat(t+function(e){return e%2===0?1:0}(n))}),octave:t,chord:n,duration:e.length>1?"2":"1"}})})},h=n(61),v=n(62),f=n(104),g=n(18),_=n.n(g),y=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=new _.a.Track,i=new _.a.Track;e.map(function(e){return"2"===e.duration?new _.a.NoteEvent({pitch:Object(h.a)(1,1/0,e.notes),duration:"2"}):new _.a.NoteEvent({pitch:Object(h.a)(1,1/0,e.notes),duration:"1"})}).map(function(e){return a.addEvent(e)}),n&&e.map(function(e){I(e,i)}),a.setTempo(t||120);var o=new _.a.Writer([a,i]);return console.log(o.dataUri()),o.dataUri()},j=function(e){var t=O(Object(v.a)(e)),n=O(t),a=O(n);return a[Math.floor(Math.random()*a.length)]},O=function(e){return Object(f.a)(e,Object(h.a)(1,1/0,e))},w=function(e,t,n){t.addEvent(new _.a.NoteEvent({pitch:"".concat(j(e.notes).charAt(0),"2"),duration:n}))},I=function(e,t){return"2"===e.duration?new Array(2).fill().map(function(){return w(e,t,"4")}):new Array(4).fill().map(function(){return w(e,t,"4")})},C=n(107),D=n(25),A=n.n(D),G=n(40),x=n(41),M=n.n(x),k=new AudioContext,N=n(79),B=function(){var e=Object(G.a)(A.a.mark(function e(t,n){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:N.instrument(k,"https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/FatBoy/".concat(n,"-mp3.js")).then(function(e){var n=new M.a.Player(function(t){var n=k.currentTime;console.log(t),"Note on"===t.name?e.play(t.noteName,n,{gain:t.velocity/4}):console.log(t)});n.loadDataUri(t),n.play()});case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(G.a)(A.a.mark(function e(t,n){var a;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(a=new M.a.Player(function(e){console.log(n);var t=k.currentTime;console.log(e),"Note on"===e.name&&n?n.playNote(e.noteName,"all",{time:t}):console.log(e)})).loadDataUri(t),a.play();case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),S=n(8),z=["accordion","acoustic_bass","acoustic_grand_piano","acoustic_guitar_nylon","acoustic_guitar_steel","agogo","alto_sax","applause","bagpipe","banjo","baritone_sax","bassoon","bird_tweet","blown_bottle","brass_section","breath_noise","bright_acoustic_piano","celesta","cello","choir_aahs","church_organ","clarinet","clavinet","contrabass","distortion_guitar","drawbar_organ","dulcimer","electric_bass_finger","electric_bass_pick","electric_grand_piano","electric_guitar_clean","electric_guitar_jazz","electric_guitar_muted","electric_piano_1","electric_piano_2","english_horn","fiddle","flute","french_horn","fretless_bass","fx_1_rain","fx_2_soundtrack","fx_3_crystal","fx_4_atmosphere","fx_5_brightness","fx_6_goblins","fx_7_echoes","fx_8_scifi","glockenspiel","guitar_fret_noise","guitar_harmonics","gunshot","harmonica","harpsichord","helicopter","honkytonk_piano","kalimba","koto","lead_1_square","lead_2_sawtooth","lead_3_calliope","lead_4_chiff","lead_5_charang","lead_6_voice","lead_7_fifths","lead_8_bass__lead","marimba","melodic_tom","music_box","muted_trumpet","oboe","ocarina","orchestra_hit","orchestral_harp","overdriven_guitar","pad_1_new_age","pad_2_warm","pad_3_polysynth","pad_4_choir","pad_5_bowed","pad_6_metallic","pad_7_halo","pad_8_sweep","pan_flute","percussive_organ","piccolo","pizzicato_strings","recorder","reed_organ","reverse_cymbal","rock_organ","seashore","shakuhachi","shamisen","shanai","sitar","slap_bass_1","slap_bass_2","soprano_sax","steel_drums","string_ensemble_1","string_ensemble_2","synth_bass_1","synth_bass_2","synth_brass_1","synth_brass_2","synth_choir","synth_drum","synth_strings_1","synth_strings_2","taiko_drum","tango_accordion","telephone_ring","tenor_sax","timpani","tinkle_bell","tremolo_strings","trombone","trumpet","tuba","tubular_bells","vibraphone","viola","violin","voice_oohs","whistle","woodblock","xylophone"];function P(){var e=Object(c.a)([""]);return P=function(){return e},e}function T(){var e=Object(c.a)(["\n  justify-content: space-between;\n  flex-direction: column;\n  height: 100px;\n"]);return T=function(){return e},e}function W(){var e=Object(c.a)(["\n  font-size: 12pt;\n"]);return W=function(){return e},e}function U(){var e=Object(c.a)(["\n  font-size: 32pt;\n  width: 800px;\n  height: 400px;\n"]);return U=function(){return e},e}function L(){var e=Object(c.a)(["\n  padding: 20;\n"]);return L=function(){return e},e}var R=S.a.div(L()),J=S.a.textarea(U()),q=S.a.text(W()),H=S.a.div(T()),Y=Object(S.a)(function(e){var t=Object(a.useState)("BMaj7 D7 | GMaj7 Bb7 | EbMaj7 | Am7 D7 | GMaj7 Bb7 | EbMaj7 F#7 | BMaj7| Fm7 Bb7 | EbMaj7 | Am7 D7 | GMaj7 | C#m7 F#7 | BMaj7 | Fm7 Bb7| EbMaj7 | C#m7 F#7"),n=Object(s.a)(t,2),o=n[0],r=n[1],c=Object(a.useState)(240),l=Object(s.a)(c,2),u=l[0],m=l[1],d=Object(a.useState)(1),b=Object(s.a)(d,2),E=b[0],h=b[1],v=Object(a.useState)(!1),f=Object(s.a)(v,2),g=f[0],_=f[1],j=Object(a.useState)("marimba"),O=Object(s.a)(j,2),w=O[0],I=O[1];return i.a.createElement("div",{style:{width:"100vh",height:"100vh",alignItems:"center",paddingTop:100}},i.a.createElement("form",{onSubmit:function(e){return function(e){var t=e.e,n=e.allChords,a=e.tempo,i=e.instrument,o=e.loop,r=e.bass;t.preventDefault();var c=Object(C.a)(p({chords:n,octave:4,loop:o}));console.log(c,":::CHORDS");var l=y(c,a,r);B(l,i)}({e:e,allChords:o,tempo:u,instrument:w,loop:E,bass:g})}},i.a.createElement(J,{value:o,onChange:function(e){return r(e.target.value)}}),i.a.createElement(H,null,i.a.createElement(q,null,"Tempo:"),i.a.createElement("input",{value:u,type:"number",onChange:function(e){m(e.target.value)}}),i.a.createElement(R,null),i.a.createElement(q,null,"Repeat:"),i.a.createElement("input",{value:E,type:"number",onChange:function(e){h(e.target.value)}}),i.a.createElement(R,null),i.a.createElement(q,null,"Instrument:"),i.a.createElement("select",{value:w,onChange:function(e){return I(e.target.value)}},z.map(function(e){return i.a.createElement("option",null,e)})),i.a.createElement(R,null),i.a.createElement(q,null,"Bassline:"),i.a.createElement("select",{value:g,onChange:function(e){return _(e.target.value)}},i.a.createElement("option",{value:!0},"true"),i.a.createElement("option",{value:!1},"false")),i.a.createElement("input",{type:"submit",value:"Play"}))))})(P()),$=n(24),K=n(26),Q=n.n(K),V=(new Q.a.Tremolo).start(),X=function(e){return function(t){var n=new Q.a.PolySynth({oscillator:{type:"fmsquare",modulationType:"sawtooth",modulationIndex:3,harmonicity:3.4},envelope:{attack:.001,decay:.1,sustain:.1,release:.1}}).chain(V,Q.a.Master),a=(new Q.a.FMSynth).toMaster();return i.a.createElement(e,Object.assign({synth:n,fmSynth:a},t),t.children)}},Z=n(108),ee=function(e){var t=Object(a.useRef)(),n=Object(a.useState)(!1),o=Object(s.a)(n,2),r=o[0],c=o[1],l=Object(a.useState)(!1),u=Object(s.a)(l,2),m=u[0],d=u[1],p=Object(a.useState)(),b=Object(s.a)(p,2),E=b[0],h=b[1],v=Object(a.useState)(1),f=Object(s.a)(v,2),g=f[0],_=f[1];e.midiIn&&!E&&e.midiIn.addListener("noteon","all",function(t){console.log("Received 'noteon' message ("+t.note.name+t.note.octave+").");var n=t.note.name+t.note.octave;e.synth&&e.synth.triggerAttackRelease(n,.5),h(n)}),e.midiIn&&!E&&e.midiIn.addListener("controlchange","all",function(e){console.log(e),_(e.value)}),Object(a.useEffect)(function(){e.synth&&e.synth.set({detune:10*g})},[g]),e.midiIn&&e.midiIn.removeListener("noteoff"),Object($.b)(function(){t.current.rotation.x=t.current.rotation.y+=.01,t.current.rotation.y=E&&E.includes(e.activationNotes[0])?t.current.rotation.y+=1:t.current.rotation.y,t.current.position.z=E&&E.includes(e.activationNotes[1])?t.current.position.z+=.01:t.current.position.z,t.current.position.z=E&&E.includes(e.activationNotes[2])?t.current.position.z-=.01:t.current.position.z,t.current.position.y=E&&E.includes(e.activationNotes[3])?t.current.position.y-=.01:t.current.position.y,t.current.position.y=E&&E.includes(e.activationNotes[4])?t.current.position.y+=.01:t.current.position.y,t.current.position.x=E&&E.includes(e.activationNotes[5])?t.current.position.x-=.01:t.current.position.x,t.current.position.x=E&&E.includes(e.activationNotes[6])?t.current.position.x+=.01:t.current.position.x});var y=t.current?t.current.rotation.y/3:1;return i.a.createElement("mesh",Object.assign({},e,{ref:t,scale:m?[.7,.7,.7]:[.5,.5,.5],onClick:function(n){d(!m),console.log(t.current.rotation.y);var a=function(e,t){var n=Math.ceil(5*e)%Object(Z.a)(t);return console.log(t[n]),t[n]}(y,e.notes);e.synth&&e.synth.triggerAttackRelease(a,.5),e.midiOut&&e.midiOut.playNote(a,"all",{duration:1e3})},onPointerOver:function(e){return c(!0)},onPointerOut:function(e){return c(!1)}}),i.a.createElement("boxBufferGeometry",{attach:"geometry",args:[1,1,1]}),i.a.createElement("meshStandardMaterial",{attach:"material",color:r?"#FFFF00":"#00ffff"}))},te=X(ee),ne=function(e){return i.a.createElement($.a,{style:{width:"100vw",height:"100vh",marginLeft:"-200px"}},i.a.createElement("ambientLight",null),i.a.createElement("pointLight",{position:[10,10,10]}),e.children)},ae=function(e){return i.a.createElement($.a,{style:{width:"100%",height:"100%"}},i.a.createElement("ambientLight",null),i.a.createElement("pointLight",{position:[10,10,10]}),e.children)},ie=function(e){return i.a.createElement("div",{style:{width:"100vh",height:"100vh",alignItems:"center"}},i.a.createElement("div",{style:{justifyContent:"space-between"}},i.a.createElement("select",null,e.midiIns&&e.midiIns.map(function(t){return i.a.createElement("option",{value:t._midiInput.id,onChange:function(){return e.setMidiInId(t._midiInput.id)}},t._midiInput.name)}))),i.a.createElement(ne,null,i.a.createElement(te,{midiIn:e.midiIn,noteEvent:e.noteEvent,activationNotes:["C","D","F","G","B","E","F"],notes:["A4","C5","D3","E4","G4","A3","C4","D5","E4","G4"],position:[-3,-.5,0]}),i.a.createElement(te,{midiIn:e.midiIn,noteEvent:e.noteEvent,activationNotes:["C","D","F","G","B","E","F"],notes:["A4","C5","D3","E4","G4","A3","C4","D5","E4","G4"],position:[1,0,0]}),i.a.createElement(te,{midiIn:e.midiIn,noteEvent:e.noteEvent,activationNotes:Object(v.a)(["C","D","F","G","B","E","F"]),notes:Object(v.a)(["A4","C5","D3","E4","G4","A3","C4","D5","E4","G4"]),position:[-2,3,0]}),i.a.createElement(te,{midiIn:e.midiIn,noteEvent:e.noteEvent,activationNotes:["Bb","Ab","D","F","E","F","G"],notes:["A4","C5","D3","E4","G4","A3","C4","D5","E4","G4"],position:[-3,2,0]}),i.a.createElement(te,{midiIn:e.midiIn,noteEvent:e.noteEvent,activationNotes:Object(v.a)(["Bb","Ab","D","F","E","F","G"]),notes:Object(v.a)(["A4","C5","D3","E4","G4","A3","C4","D5","E4","G4"]),position:[-1,1,0]}),i.a.createElement(te,{midiIn:e.midiIn,noteEvent:e.noteEvent,activationNotes:["E","Gb","C","D","B","Bb","Eb"],notes:["A4","C5","D3","E4","G4","A3","C4","D5","E4","G4"],position:[1,-1,0]}),i.a.createElement(te,{midiIn:e.midiIn,noteEvent:e.noteEvent,activationNotes:Object(v.a)(["E","Gb","C","D","B","Bb","Eb"]),notes:["A4","C5","D3","E4","G4","A3","C4","D5","E4","G4"],position:[1,-1,0]}),i.a.createElement(te,{midiIn:e.midiIn,noteEvent:e.noteEvent,activationNotes:["Eb","Gb","C","A","C","D","B"],notes:["A4","C5","D3","E4","G4","A3","C4","D5","E4","G4"],position:[-2,-1,1]}),i.a.createElement(te,{midiIn:e.midiIn,noteEvent:e.noteEvent,activationNotes:Object(v.a)(["Eb","Gb","C","A","C","D","B"]),notes:["A4","C5","D3","E4","G4","A3","C4","D5","E4","G4"],position:[-2,-1,1]}),i.a.createElement(te,{midiIn:e.midiIn,noteEvent:e.noteEvent,activationNotes:["D","E","C","G","Eb","Gb","C"],notes:["A4","C5","D3","E4","G4","A3","C4","D5","E4","G4"],position:[-3,-1,1]}),i.a.createElement(te,{midiIn:e.midiIn,noteEvent:e.noteEvent,activationNotes:Object(v.a)(["D","E","C","G","Eb","Gb","C"]),notes:["A4","C5","D3","E4","G4","A3","C4","D5","E4","G4"],position:[-4,3,1]}),i.a.createElement(te,{midiIn:e.midiIn,noteEvent:e.noteEvent,activationNotes:["D","C","E","Gb","C","G","Eb"],notes:Object(v.a)(["A4","C5","D3","E4","G4","A3","C4","D5","E4","G4"]),position:[-4,3,1]}),i.a.createElement(te,{midiIn:e.midiIn,noteEvent:e.noteEvent,activationNotes:Object(v.a)(["D","E","C","G","Eb","Gb","C"]),notes:["A4","C5","D3","E4","G4","A3","C4","D5","E4","G4"],position:[-4,3,1]})))};function oe(){var e=Object(c.a)(["\n  justify-content: space-between;\n  flex-direction: column;\n  height: 100px;\n"]);return oe=function(){return e},e}function re(){var e=Object(c.a)(["\n  font-size: 12pt;\n"]);return re=function(){return e},e}function ce(){var e=Object(c.a)(["\n  padding: 20;\n"]);return ce=function(){return e},e}function le(){var e=Object(c.a)(["\n  font-size: 32pt;\n  font-family: Arial;\n"]);return le=function(){return e},e}var ue=S.a.textarea(le()),se=S.a.div(ce()),me=S.a.text(re()),de=S.a.div(oe()),pe=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),o=n[0],r=n[1],c=Object(a.useState)(160),l=Object(s.a)(c,2),u=l[0],m=l[1],d=Object(a.useState)(1),b=Object(s.a)(d,2),E=b[0],h=b[1],v=Object(a.useState)(!1),f=Object(s.a)(v,2),g=f[0],_=f[1],j=Object(a.useState)([["A4","C4","D4","E4","G4"],["G4","A4","B4","Db4","Eb4","F4"],["A5","Db5","Eb5","E5","G2"],["G4","A4","B4","Db4","Eb4","F4"],["A5","Db5","Eb5","E5","G2"]]),O=Object(s.a)(j,2),w=O[0],I=O[1];return console.log(e,I),i.a.createElement(i.a.Fragment,null,i.a.createElement("select",null,e.midiOuts&&e.midiOuts.map(function(t){return i.a.createElement("option",{value:t._midiOutput.id,onChange:function(){return e.setMidiOutId(t._midiInput.id)}},t._midiOutput.name)})),i.a.createElement("form",{onSubmit:function(t){return function(e){var t=e.e,n=e.allChords,a=e.output,i=e.tempo,o=e.loop,r=e.bass;t.preventDefault();var c=Object(C.a)(p({chords:n,octave:4,loop:o})),l=y(c,i,r);F(l,a)}({e:t,allChords:o,output:e.midiOut,loop:E,tempo:u,bass:g})}},i.a.createElement(ue,{value:o,onChange:function(e){return r(e.target.value)}}),i.a.createElement("input",{type:"submit",value:"Play"})),i.a.createElement("div",{style:{width:"100vh",height:"100vh",alignItems:"center",paddingTop:100}},i.a.createElement(de,null,i.a.createElement(me,null,"Tempo:"),i.a.createElement("input",{value:u,type:"number",onChange:function(e){m(e.target.value)}}),i.a.createElement(se,null),i.a.createElement(me,null,"Repeat:"),i.a.createElement("input",{value:E,type:"number",onChange:function(e){h(e.target.value)}}),i.a.createElement(se,null),i.a.createElement(me,null,"Bassline:"),i.a.createElement("select",{value:g,onChange:function(e){return _(e.target.value)}},i.a.createElement("option",{value:!0},"true"),i.a.createElement("option",{value:!1},"false")),i.a.createElement("input",{type:"submit",value:"Play"})),i.a.createElement(ne,{style:{width:"100vw",height:"100vh"}},w.map(function(t,n){return n%2!==0?i.a.createElement(ee,{key:n,midiOut:e.midiOut,notes:t,position:[-n,.5,0]}):i.a.createElement(ee,{key:n,midiOut:e.midiOut,notes:t,position:[n-4,2,0]})}))))};function be(){var e=Object(c.a)(["\n  color: #ffffff;\n  font-size: 40pt;\n  text-align: left;\n  user-select: none;\n"]);return be=function(){return e},e}function Ee(){var e=Object(c.a)(["\n  color: #ffffff;\n  white-space: pre;\n  text-align: left;\n"]);return Ee=function(){return e},e}function he(){var e=Object(c.a)(["\n  background-color: #000000;\n  border-radius: 10px;\n  white-space: pre;\n  text-align: left;\n  padding-left: 50px;\n  padding-right: 50px;\n  padding-bottom: 50px;\n  margin-top: 30px;\n  width: 800px;\n"]);return he=function(){return e},e}var ve=function(e){return i.a.createElement("div",{style:{width:"100vh",height:"100vh",alignItems:"center"}},i.a.createElement("div",{style:{justifyContent:"space-between"}},i.a.createElement("div",{style:{padding:"20px"}}),i.a.createElement(_e,null,"Web Midi API"),i.a.createElement(fe,null,i.a.createElement(ge,null,"\nnavigator.requestMIDIAccess()\n  .then(onMIDISuccess);\n\nconst onMIDISuccess = (webMidiAPI) => {\n    console.log(webMidiAPI.inputs, webMidiAPI.outputs);\n    const inputs = webMidiAPI.inputs\n    inputs.map(input => {\n        input.value.onmidimessage = onMIDIMessage;\n    })\n}\n\nconst noteOn = (midiNote, velocity) => {\n    // Use a Web Audio API or library \n    // to play the note\n    // or update your UI\n    play(midiNote, velocity)\n}\n\nconst onMIDIMessage = (event) => {\n    const data = event.data,\n    const [type, note, velocity] = data,\n\n    type === 144 && noteOn(note, velocity);\n    type === 128 && noteOff(note, velocity);\n}\n\n// This project does not use the Web MIDI API directly. \n// Instead I use a bunch of libraries. This is JS afterall.\n")),i.a.createElement(ae,null,i.a.createElement(te,{noteEvent:e.noteEvent,activationNotes:["C","D","F","G","B","E","F"],notes:["A4","C5","D3","E4","G4","A3","C4","D5","E4","G4"],position:[0,-.5,3]})),i.a.createElement(_e,null,"webmidi.js"),i.a.createElement(fe,null,i.a.createElement(ge,null,'\nimport WebMidi from "webmidi";\n\nWebMidi.enable(() => {\n\n    // Easily get inputs and outputs\n    console.log(WebMidi.inputs);\n    console.log(WebMidi.outputs);\n\n    const input = WebMidi.getInputById(\n        WebMidi.inputs[0]._midiInput.id\n    );\n\n    const output = WebMidi.getOutputById(\n        WebMidi.outputs[0]._midiOutput.id\n    );\n\n    // much easier to implement a noteon\n    input.addListener("noteon", "all", e => {\n\n        const note = e.note.name + e.note.octave;\n\n        // Play with instrument or use the note \n        // to control a display\n        synth.triggerAttackRelease(note, 0.5);\n    });\n});\n    ')),i.a.createElement(ae,null,i.a.createElement(te,{noteEvent:e.noteEvent,activationNotes:["C","D","F","G","B","E","F"],notes:["A4","C5","D3","E4","G4","A3","C4","D5","E4","G4"],position:[-1.5,-.5,3]})),i.a.createElement(_e,null,"midiwriter.js"),i.a.createElement(fe,null,i.a.createElement(ge,null,"\n  import MidiWriter from \"midi-writer-js\";\n\n  const track = new MidiWriter.Track();\n\n  // Add a BbMaj9 chord\n  new MidiWriter.NoteEvent({\n    pitch: ['Bb4', 'D5', 'A5', 'C5'],\n    duration: \"1\"\n  })\n\n  // Add as many tracks as you want\n  const midiFile = new MidiWriter.Writer([track]);\n\n  // You can use the data uri with other libraries\n  // to play back MIDI and perform any code in time with\n  // the MIDI.\n  // Or you can directly download it and play the file in your \n  // favoroite software.\n\n  midiFile.dataUri();\n  ")),i.a.createElement(ae,null,i.a.createElement(te,{noteEvent:e.noteEvent,activationNotes:["C","D","F","G","B","E","F"],notes:["A4","C5","D3","E4","G4","A3","C4","D5","E4","G4"],position:[2,-.5,3]})),i.a.createElement(_e,null,"midiplayer.js"),i.a.createElement(fe,null,i.a.createElement(ge,null,'\nimport MidiPlayer from "midi-player-js";\n\nconst ac = new AudioContext();\n\n  // output from previous code block\n  // this output is your synthesizer\n  // data uri from midi writer\n\n  export const playMidi = async (dataUri, output) => {\n\n    const Player = new MidiPlayer.Player(event => {\n\n      // AudioContext is important for scheduling\n      const time = ac.currentTime;\n\n      // This can be any MIDI event\n      // This is the block in which the music is played\n      event.name === "Note on" && output && \n            output.playNote(event.noteName, "all", { time })\n    });\n\n    Player.loadDataUri(dataUri);\n    Player.play();\n  };\n')),i.a.createElement(ae,null,i.a.createElement(te,{noteEvent:e.noteEvent,activationNotes:["C","D","F","G","B","E","F"],notes:["A4","C5","D3","E4","G4","A3","C4","D5","E4","G4"],position:[0,-.5,3]})),i.a.createElement("div",{style:{whiteSpace:"pre",textAlign:"left",padding:"50px"}},"\nCitations and Further reading:\nhttps://webaudio.github.io/web-midi-api/\nhttps://www.keithmcmillen.com/blog/making-music-in-the-browser-web-midi-api/\nhttps://github.com/djipco/webmidi\nhttps://www.smashingmagazine.com/2018/03/web-midi-api/\nhttps://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/currentTime\n\nOther libraries used\nReact.js\nstyled-components \nTonal (music theory) https://github.com/tonaljs/tonal\nreact-three-fiber (threejs for react) https://github.com/react-spring/react-three-fiber\nTone.js (synthesizers) https://tonejs.github.io/\n")))},fe=S.a.div(he()),ge=S.a.text(Ee()),_e=S.a.text(be()),ye=n(13),je=n.n(ye),Oe=n(105),we=Object(Oe.a)(X,function(e){return function(t){var n=Object(a.useState)(),o=Object(s.a)(n,2),r=o[0],c=(o[1],Object(a.useState)()),l=Object(s.a)(c,2),u=l[0],m=l[1],d=Object(a.useState)(),p=Object(s.a)(d,2),b=p[0],E=p[1],h=Object(a.useState)(),v=Object(s.a)(h,2),f=v[0],g=v[1],_=Object(a.useState)(),y=Object(s.a)(_,2),j=y[0],O=y[1],w=Object(a.useState)(),I=Object(s.a)(w,2),C=I[0],D=I[1],A=Object(a.useState)(),G=Object(s.a)(A,2),x=G[0],M=G[1];return Object(a.useEffect)(function(){je.a.enable(function(){if(console.log(je.a.inputs),console.log(je.a.outputs),M(je.a.inputs),D(je.a.outputs),Object(Z.a)(je.a.inputs)>0&&Object(Z.a)(je.a.outputs)>0){var e=je.a.getInputById(j||je.a.inputs[1]._midiInput.id),t=je.a.getOutputById(u||je.a.outputs[1]._midiOutput.id);E(t),g(e)}})},[u,j,x,C]),i.a.createElement(e,Object.assign({noteEvent:r,midiOuts:C,setMidiOutId:m,midiIns:x,setMidiInId:O,midiOut:b,midiIn:f},t),t.children)}});function Ie(){var e=Object(c.a)(["\n  height: 100%;\n  width: 50;\n  left: 0;\n  z-index: 20;\n  position: fixed;\n  flex: 1;\n  background-color: #ff00ff;\n  justify-content: left;\n"]);return Ie=function(){return e},e}var Ce=S.a.div(Ie()),De=we(function(e){return i.a.createElement(l.a,{basename:"/"},i.a.createElement("div",{style:{flexDirection:"row"}},i.a.createElement(Ce,null,i.a.createElement("div",null,i.a.createElement(l.b,{to:"/fakebook"},"Jazzbot")),i.a.createElement("div",null,i.a.createElement(l.b,{to:"/midi-in"},"midi-in")),i.a.createElement("div",null,i.a.createElement(l.b,{to:"/midi-out"},"midi-out")),i.a.createElement("div",null,i.a.createElement(l.b,{to:"/code"},"code"))),i.a.createElement(u.c,null,i.a.createElement(u.a,{path:"/fakebook"},i.a.createElement(Y,null)),i.a.createElement(u.a,{path:"/midi-in"},i.a.createElement(ie,e)),i.a.createElement(u.a,{path:"/midi-out"},i.a.createElement(pe,e)),i.a.createElement(u.a,{path:"/code"},i.a.createElement(ve,e)),i.a.createElement(u.a,{path:"/",component:Y}))))}),Ae=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(De,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(Ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},45:function(e,t,n){e.exports=n(103)},50:function(e,t,n){},52:function(e,t,n){}},[[45,2,1]]]);
//# sourceMappingURL=main.0f4e0324.chunk.js.map