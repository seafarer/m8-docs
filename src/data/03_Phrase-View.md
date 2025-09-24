# Phrase View

A phrase contains 16 steps of notes with volume, instrument number, and 3 command effect columns. By default each step represents a 16th note in time, but can be altered by defining the number of ticks per step in the Groove View.

The first column “N” is the note with its current octave spanning 11 octaves. It covers the entire 128 MIDI note range. The value can be changed in semitones using **[EDIT]**+**[LEFT or RIGHT]** or by octave using **[EDIT]**+**[UP or DOWN]**. A note-off can be inserted in the Note column by clearing **[OPT]**+**[EDIT]** an empty note “---”. The next column “V” is the volume which determines the loudness of the corresponding note from 00 (silence) to 7F (maximum volume) with a default of 64. The “I” column specifies the instrument number to play. Leaving it empty (“--”) allow notes to be changed without the instrument retriggering. You can press **[EDIT]** twice on this column to choose a new/unused instrument number, or press **[SHIFT]**+**[OPTION then EDIT]** to copy the contents of the current instrument to a new number for editing.

The three “FX” columns are for placing commands that affect the sequence, notes, or instruments in different ways. The commands available are determined by the type of instrument that is currently being used. To see a helpful view for selecting and placing commands use **[EDIT]**+**[UP or DOWN]** which will launch the Effects Command Help view.

An asterisk next to the phrase number (“PHRASE 00\*”) indicates that the phrase is used elsewhere in the chain or song.

***

### Shortcuts

#### Navigating
* **[DIRECTION]**: Move cursor.
* **[OPTION]**+**[UP or DOWN]**: Navigate to previous or next phrase in the chain.
* **[OPTION]**+**[LEFT or RIGHT]**: Navigate to previous or next track.

#### Playing
* **[PLAY]**: Starts/stops playing phrase.
* **[SHIFT]**+**[PLAY]**: Continue song at chain position.
* **[OPTION]**+**[SHIFT]**: Mute current track (release option first to hold the mute).
* **[OPTION]**+**[PLAY]**: Solo current track (release option first to hold the solo).
* **[OPTION]**+**[SHIFT]**+**[PLAY]**: Clears all mute and solos.

#### Editing
* **[EDIT]**: On an empty cell: insert a new value with a default value of the last edited or deleted value.
* **[EDIT]**+**[UP or DOWN]**: Edits the selected value on the cursor’s position incrementing by large steps. On a command column: show the Effect Help/Selection view. In selection mode: If multiple columns and rows are selected the contents can be shifted up or down.
* **[EDIT]**+**[LEFT or RIGHT]**: Edits the selected value on the cursor’s position incrementing by small steps.
* **[EDIT]**+**[EDIT]** (double tap): On the instrument column: set the selected instrument value to a new unused instrument. On a command value column where the command is the table or groove command (TBL, TBX, GRV, or GGR): set the value to a new unused table.
* **[EDIT]**+**[OPTION]**: Deletes/cuts the selected value. In selection mode: cuts the selection into the copy buffer.
* **[SHIFT]**+**[OPTION]**: Enters selection mode for moving, copying, or cutting a block of phrase data.
* **[OPTION]**: In selection mode: copies the selection and exits selection mode.
* **[OPTION]**+**[UP or DOWN]**: In selection mode with note column selected: Randomize the note value up or down, else navigates to the previous or next phrase in the chain.
* **[OPTION]**+**[LEFT or RIGHT]**: In selection mode with note column selected: Left to cycle note fill modes, right to randomize note and instrument triggers, else navigates to the previous or next track’s phrase. *When exiting selection mode after a fill action, perform a paste to undo.*
* **[SHIFT]**+**[EDIT]**: Pastes the copy buffer that was copied in selection mode. In selection mode: with a series of rows and a single column highlighted: interpolate the selected range.
* **[SHIFT]**+**[OPTION, then EDIT]**: On the instrument column or on a command value column where the command is the table or groove command (TBL, TBX, GRV, or GGR): copy the contents of the selected data into a new number. (I.e. “clone”).