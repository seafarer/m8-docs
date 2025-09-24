# Table View

Tables are little sequencers that play alongside instruments. They are an incredibly powerful tool to transform instruments and compositions, from arpeggios and volume slides to multi-stage envelopes and effects. Every instrument has its own dedicated table with an additional 128 tables freely assignable via the table (“TBL“) FX command. Each table has 16 rows that include a note transpose, volume amount, and 3 FX command columns.

Unlike a phrase which runs at the speed of the global tempo and groove, tables run at the user-defined speed that is set by the Table Tic Rate in the Instrument View. By default when the play position reaches the bottom of a table it loops back to the top and continues for as long as the instrument is played.

The left column “N” is the transpose column. The “V” column is the volume column. These values are multiplied by the “V” in the Phrase View. The three “FX” columns are identical to the “FX” columns in the phrase screen, however some commands have a different behavior. To see a helpful view for selecting and placing commands use **[EDIT]**+**[UP or DOWN]** which will launch the Effects Command Help view. Each command column can run at different speeds by using the tick (“TIC”) command in an FX column. To shorten a table refer to the HOP command.

***

### Table TIC Modes
* **TIC00**: Increments table row each time the instrument is triggered.
* **TIC01 TO TICFB**: Number of ticks per row.
* **TICFC**: Octave Map: Maps playing octave to table row.
* **TICFD**: Velocity Map: Maps velocity to table row.
* **TICFE**: Note Map: Maps note to table row. Note: Use HOP00 on row “0C” to limit table to 12 notes / octave.
* **TICFF**: Increments table row at 200 Hz.

***

### Shortcuts

#### Navigating
* **[DIRECTION]**: Move cursor.
* **[OPTION]**+**[LEFT or RIGHT]**: Navigate to previous or next table.
* **[OPTION]**+**[UP or DOWN]**: Navigate +/- 16 tables.

#### Playing
* **[PLAY]**: Starts/stops playing phrase.
* **[SHIFT]**+**[PLAY]**: Continue song at chain position.
* **[OPTION]**+**[SHIFT]**: Mute current track (release option first to hold the mute).
* **[OPTION]**+**[PLAY]**: Solo current track (release option first to hold the solo).
* **[OPTION]**+**[SHIFT]**+**[PLAY]**: Clears all mute and solos.

#### Editing
* **[EDIT]**: On an empty cell: insert a new value with a default value of the last edited or deleted value. In selection mode with a single column highlighted: interpolate the selected range.
* **[EDIT]**+**[UP or DOWN]**: Edits the selected value on the cursor’s position incrementing by large steps. On a command column: show the Effect Help/Selection view. In selection mode: If multiple columns and row are selected the contents can be shifted up or down.
* **[EDIT]**+**[LEFT or RIGHT]**: Edits the selected value on the cursor’s position incrementing by small steps.
* **[EDIT]**+**[OPTION]**: Deletes/cuts the selected value. In selection mode, cuts the selection into the copy buffer.
* **[SHIFT]**+**[OPTION]**: Enters selection mode for moving, copying, or cutting a block of table data.
* **[OPTION]**: In selection mode: copies the selection and exits selection mode.
* **[SHIFT]**+**[EDIT]**: Pastes the copy buffer that was copied in selection mode.
* **[SHIFT]**+**[OPTION, then EDIT]**: On a command value column where the command is the table or groove command (TBL, TBX, GRV, or GGR): copy the contents of the selected data into a new number. (I.e. “clone”).