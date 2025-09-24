# Song View

The song view is where you create the structure of your song. It is comprised of 8 tracks from left to right, with a list of chains for each track to play though vertically. When the song is playing, each track’s song position will increment vertically through the list of chains until it reaches an empty column (“--”), at which point the given track will loop back to the beginning of its list of chains.

Since each chain can contain 1 to 16 phrases it is possible to have different play lengths for each track, causing individual track play positions to be misaligned. If you do not wish to have this behavior it is recommended to design your chains to all have the same number of phrases. To maintain a track’s play position with other tracks while it remains silent, create a chain that contains empty phrases. It is common to use either chain “00” or “FE” for this purpose. Note that chains which contain no notes are grayed out on the song screen for readability.

The song can contain up to 256 rows of chains. You may find it useful to use unused rows below the base song structure, “isolating” to experiment or create new arrangements without breaking the existing song.

***

### Live Mode

Live mode allows playing, cueing, or stopping each track independently and from anywhere in the song structure. Press **[SHIFT]**+**[LEFT]** from the song view to enter or exit live mode playback.

When a track is cued for playback via **[PLAY]** the sequencer will wait for the currently playing chain to finish before activating the newly cued chain by default. You can change this behavior on the Project View under “LIVE QUANTIZE”.

***

### Shortcuts

#### Navigating
* **[DIRECTION]**: Move cursor.
* **[OPTION]**+**[UP or DOWN]**: Move/scroll the cursor 16 rows up or down.

#### Playing
* **[PLAY]**: Plays/stops all tracks.
* **[LEFT]**+**[PLAY]**: Cue the selected song row for playback.
* **[OPTION]**+**[LEFT or RIGHT]**: Solo all tracks to the left or right side of the cursor’s position.
* **[OPTION]**+**[SHIFT]**: Mute current track (release option first to hold the mute).
* **[OPTION]**+**[PLAY]**: Solo current track (release option first to hold the solo).
* **[OPTION]**+**[SHIFT]**+**[PLAY]**: Clears all mute and solos.

#### Editing
* **[EDIT]**: On an empty column (“--”): inserts a chain with a default value of the last edited or deleted chain.
* **[EDIT]**+**[DIRECTION]**: Edits the chain number on the cursor’s position. In selection mode: Selected contents can be moved up or down.
* **[EDIT]**+**[EDIT]** (double tap): Will insert a new unused empty chain.
* **[EDIT]**+**[OPTION]**: Deletes/cuts the selected chain. In selection mode, cuts the selection into the copy buffer.
* **[SHIFT]**+**[OPTION]**: Enters selection mode for moving, copying, or cutting chains.
* **[OPTION]**: While playback is stopped, hold option to reveal the current track’s time in min:sec. In selection mode: copies the selection and exits selection mode.
* **[SHIFT]**+**[EDIT]**: Pastes the copy buffer that was copied in selection mode.
* **[SHIFT]**+**[OPTION, then EDIT]**: Copies the contents of the selected chain into a new chain number. (I.e. “clone”).
* **[SHIFT]**+**[OPTION, then double tap EDIT]**: Copies the contents of the selected chain and the contents of all phrases inside the chain into a new chain and phrases. (I.e. “deep clone”).
* **[OPTION]**+**[OPTION]**+**[OPTION]**: Creates or removes a “bookmark” to mark a chain.
* **[UP]**+**[UP]**: On ROW “00” enter into track reordering mode. Hold **[Edit]** and press **[LEFT or RIGHT]** to move the selected track left or right respectively. Press **[Down]** to exit.
* **[EDIT]**+**[EDIT]**: While playback is stopped and in selection mode, render the selection to a new instrument.