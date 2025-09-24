# Scale View

Scales allow defining and quantizing note related events in M8. This includes project transpose, chain transpose, note entry, arpeggio (“ARP”) command, pitch (“PIT”) effect command, the “PIT” modulation modifier in FMSynth, and the MIDIOUT instrument chord (“CHD”) and add note (“ADD”) effect commands, respectively.

There are up to 16 user defined scales available per project. Scale “00” is the default scale for all 8 tracks. Each track can independently use a different scale. Assign a scale and key signature to a track by using the scale (“SCA”) FX command, globally using the global scale (“SCG“) command, or for use in Hypersynth. Enable or disable scales per-instrument by editing the “TRANSP.” option in Instrument view.

The “Key” is a global setting that defines the root note for the default scale. It can be overwritten on a per-track basis by using the scale “SCA” command as mentioned above. For any given scale each of the 12 note intervals can be enabled by setting “EN” to “ON” with an optional detuning offset from -24.00 to +24.00 semitones.

Name, load and save any of the 16 scales for use in other projects. On power-up M8 pre-loads the installed SD card with 92 different scales which can be found in `/Scales/Factory`.

***

### Shortcuts

#### Navigating
* **[DIRECTION]**: Move cursor.
* **[OPTION]**+**[LEFT or RIGHT]**: Navigate to previous or next scale.
* **[OPTION]**+**[UP or DOWN]**: Navigate to the first or last scale.

#### Playing
* **[PLAY]**: Starts/stops playing phrase.
* **[SHIFT]**+**[PLAY]**: Continue song at chain position.
* **[OPTION]**+**[SHIFT]**: Mute current track (release option first to hold the mute).
* **[OPTION]**+**[PLAY]**: Solo current track (release option first to hold the solo).
* **[OPTION]**+**[SHIFT]**+**[PLAY]**: Clears all mute and solos.

#### Editing
* **[EDIT]**: On an empty cell: insert a new value with a default value of the last edited or deleted value.
* **[EDIT]**+**[UP or DOWN]**: Edits the selected value and the value above or beneath.
* **[EDIT]**+**[LEFT or RIGHT]**: Edits the selected value by small increments.
* **[EDIT]**+**[OPTION]**: Deletes/cuts the selected value.
