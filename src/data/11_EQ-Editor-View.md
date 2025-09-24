# EQ Editor View

M8 features a 3 band parametric equalizer per instrument, the main mix, ModFX, Delay, and Reverb global effects. There are 128 assignable Instrument EQ slots to allow multiple instruments to share the same EQ settings. The 3 equalizer bands are labeled as “LOW”, “MID”, and “HIGH” with respect to their default settings. Each band is functionally identical.

***

### EQ Band Parameters
* **GAIN**: Amount of boost or cut applied to the band in decibels (dB).
* **FREQ**: The center (or corner) frequency around which the band operates.
* **Q**: The quality factor (bandwidth) of the filter. Higher Q values narrow the band.
* **TYPE**: The filter shape for the band: LOWCUT, LOWSHELF, BELL, BANDPASS, HI.SHELF, HI.CUT, ALLPASS.
* **MODE**: How to apply the band to the stereo signal: STEREO, MID, SIDE, LEFT, RIGHT.

***

### Shortcuts

#### Navigating
* **[DIRECTION]**: Move cursor.
* **[OPTION]**: Exits and returns to the Mixer View.

#### Playing
* **[EDIT]**+**[EDIT]** (Double tap): Mutes / Unmutes the current EQ.
* **[PLAY]**: Plays/stops all tracks, or previews instrument from the Instrument Pool view.
* **[SHIFT]**+**[PLAY]**: Plays/stops all tracks.
* **[OPTION]**+**[SHIFT]**: Mute current track (release option first to hold the mute).
* **[OPTION]**+**[PLAY]**: Solo current track (release option first to hold the solo).
* **[OPTION]**+**[SHIFT]**+**[PLAY]**: Clears all mute and solos.

#### Editing
* **[EDIT]**+**[UP or DOWN]**: Edits the selected value incrementing by large steps.
* **[EDIT]**+**[LEFT or RIGHT]**: Edits the selected value incrementing by small steps.
* **[EDIT]**+**[OPTION]**: Set selected parameter to its default value.
* **[SHIFT]**+**[OPTION]**: Copy EQ bank.
* **[SHIFT]**+**[EDIT]**: Paste EQ bank.
* **[OPTION+TOUCHSCREEN]**: Assign the touchscreen axis to the selected parameter.
* **[OPTION+MIDI CC]**: Assign a MIDI CC to the selected parameter.
