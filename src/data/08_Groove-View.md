# Groove View

Grooves allow defining the speed of each of the 16 steps in a phrase by altering the number of ticks each step consumes. This allows swing, shuffle, triplets, and faster phrases.

Groove “00” is the default groove for all 8 tracks. Each track can use a different groove independently. Assign a groove to a track by using the groove (“GRV”) FX command in a phrase.

Add swing to a song by navigating to the Groove view that is located above the phrase **[SHIFT]**+**[UP]**. Start the song by pressing **[SHIFT]**+**[PLAY]** and edit the value in row 0 by using **[EDIT]**+**[UP or DOWN]**. Notice that it alters both rows 0 and 1 at the same time. A common swing setting is 07,05 or 08,04.

The groove will loop to the beginning when an empty row (“--”) is encountered, and a row of “00” will skip the phrase step.

***

### The Groove Math
The M8 has a resolution of 24 ticks per quarter note (24PPQ). Since there are 4 sixteenth notes in a quarter note and each row in a phrase represents a sixteenth note in time, there are 6 ticks per row (24PPQ / 4 sixteenth notes = 6 ticks). Therefore by default all grooves have two rows of “06”. If you want to stick with the same count, the total ticks in a phrase should be equal to 96 (16 steps x 6 ticks per step). When editing a groove there is a help message at the bottom of the screen that sums the ticks for your convenience.

***

### Shortcuts

#### Navigating
* **[DIRECTION]**: Move cursor.
* **[OPTION]**+**[LEFT or RIGHT]**: Navigate to previous or next groove.
* **[OPTION]**+**[UP or DOWN]**: Navigate +/- 16 grooves.

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
* **[EDIT]**+**[OPTION]**: Deletes/cuts the selected value. In selection mode: cut the selection into the copy buffer.
* **[SHIFT]**+**[OPTION]**: Enters selection mode for moving, copying, or cutting a block of table data.
* **[OPTION]**: In selection mode: copy the selection and exits selection mode.
* **[SHIFT]**+**[EDIT]**: In selection mode interpolate the selected range, else pastes contents from the copy buffer.
