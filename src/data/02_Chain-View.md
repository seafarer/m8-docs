# Chain View

A chain is a playlist of phrases. This allows easy construction of a musical idea that extends past a single measure without having to copy and paste repetitive sections. You can use up to 16 rows of phrases per chain, allowing up to 256 steps.

In the chain view, the left column “PH” is the phrase number to play, and the right column “TSP” is an optional note transpose in semitones. To insert a new phrase, press **[EDIT]** on an empty column (“--”). The inserted value will be the last edited phrase. To create a new empty phrase on a given row, double tap the **[EDIT]** key. Duplicating a phrase to a new empty number is also possible by highlighting the desired phrase number and pressing **[SHIFT]**+**[OPTION, then EDIT]**.

Playback behavior is determined by the first empty phrase column that the sequencer encounters in the chain. An empty phrase (“--”) is considered the end of the chain and the song will continue on to the next chain in the song view.

***

### Shortcuts

#### Navigating
* **[DIRECTION]**: Move cursor.
* **[OPTION]**+**[UP or DOWN]**: Navigate to previous or next chain in the song.
* **[OPTION]**+**[LEFT or RIGHT]**: Navigate to previous or next track.

#### Playing
* **[PLAY]**: Starts/stops playing chain at cursor position.
* **[SHIFT]**+**[PLAY]**: Continue song at cursor position.
* **[OPTION]**+**[SHIFT]**: Mute current track (release option first to hold the mute).
* **[OPTION]**+**[PLAY]**: Solo current track (release option first to hold the solo).
* **[OPTION]**+**[SHIFT]**+**[PLAY]**: Clears all mute and solos.

#### Editing
* **[EDIT]**: On an empty row (“--”): insert a phrase with a default value of the last edited or deleted phrase.
* **[EDIT]**+**[DIRECTION]**: Edits the phrase number on the cursor’s position.
* **[EDIT]**+**[EDIT]** (double tap): Will insert a new unused empty phrase.
* **[EDIT]**+**[OPTION]**: Deletes/cuts the selected phrase. In selection mode, cuts the selection into the copy buffer.
* **[SHIFT]**+**[OPTION]**: Enters selection mode for moving, copying, or cutting a block of phrases.
* **[OPTION]**: In selection mode: copies the selection and exits selection mode.
* **[SHIFT]**+**[EDIT]**: Pastes the copy buffer that was copied in selection mode.
* **[SHIFT]**+**[OPTION, then EDIT]**: Copies the contents of the selected phrase into a new number. (I.e. “clone”).
