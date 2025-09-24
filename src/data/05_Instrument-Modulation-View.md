# Instrument Modulation View

This view is accessible above the instrument view (**[SHIFT]**+**[UP]**). Modulations alter instrument parameters over time. M8 has 4 configurable modulation slots per instrument, each slot can be assigned to one of the following:

* AHD ENVELOPE - A simple Attack Hold Decay envelope based on tempo
* ADSR ENVELOPE - Traditional Attack Decay Sustain Release envelope
* DRUM ENVELOPE - A sharp peak and swelling hold envelope designed for percussive elements
* LFO - Traditional tempo-synced low frequency oscillator
* TRIG ENVELOPE - AHD envelope that is triggered by another playing track or instrument.
* TRACKING - Modulate an instrument parameter to Notes or Velocities

***

### Common Modulation Settings
* **MOD[1-4]**: Modulation type.
* **DEST**: Destination parameter to be modulated.
* **SRC**: Source of the modulation (when available).

***

### Modulating Modulators
By setting “DEST” to “MOD AMT”, “MOD RATE”, or “MOD BOTH”, each modulator can affect the amount or rate of its neighboring modulator. Mod 1 affects Mod 2, 2 to 3, 3 to 4, and 4 to 1.
* **MOD AMT**: The amount is a scaling factor from 0% to 100%
* **MOD RATE**: The rate is a multiplication factor of time related parameters.
* **MOD BOTH**: Enables both amount and rate parameters.

***

### Modulation Type: AHD Envelope (ATTACK HOLD DECAY)
Attack “ATK” is the time it takes to reach the specified amount “AMT”, Hold “HOLD” is the time to wait after the attack is completed before proceeding to decay, and Decay “DEC” is the time it takes to decrease back to zero. All time-based values are in ticks and thus relative to the current song tempo.

### Modulation Type: ADSR Envelope (ATTACK DECAY SUSTAIN RELEASE)
Attack “ATK” is the time it takes to reach the specified amount “AMT”, Decay “DEC” is the time it takes to reach the sustain level, Sustain “SUS” is the hold level while the note is playing, and Release “REL” is the time it takes to decrease back to zero. For a note to proceed from sustain to the release stage, the phrase must have an OFF note value or FX command (or a note release via MIDI input).

### Modulation Type: Drum Envelope (DUCK PEAK BODY DECAY)
Peak “PEAK” determines the shape of the initial transient. It modifies two parameters: Duck amount and peak time. Body “BODY” is the time to hold the modulation before proceeding to the decay stage. Decay “DEC” is the time it takes to decrease the modulation back to zero.

### Modulation Type: LFO
LFO (Low Frequency Oscillator) modulates an instrument parameter over time. Unlike an envelope, it has a static shape that can be configured to repeat infinitely or trigger once like an envelope.
* **OSC**: The oscillator shape - Triangle, sinusoidal, ramp down, ramp up, exponential down, exponential up, square down, square up, random, and drunk. The initial 10 shapes repeat with an additional “T” added to the end which signifies “Tick rate” where the frequency range runs much faster in ticks.
* **TRIG**: Trigger behavior configures how the LFO will react when the instrument triggers and when the shape reaches the end of a cycle:
  * **FREE**: Loop the shape and not reset on new notes/instrument triggers.
  * **RETRIG**: Loop the shape and reset on each new instrument trigger.
  * **HOLD**: Hold the last value of the shape instead of repeating from the beginning.
  * **ONCE**: Play through the shape once and reset to the start value.
* **FREQ**: The rate at which the LFO cycles. The value is represented in steps (16th notes) or in ticks when the OSC is set to one of the tick “T” rate shapes.

### Modulation Type: Trig Envelope
The Trig Envelope is similar to the AHD Envelope, with the exception that it is bipolar (can have a positive or negative amount applied to the destination) and is designed to be triggered by another source. “SRC” can either be an instrument number (“00” to “7F”) or assigned to all instruments on a given track (“80” to “87” - Tracks 1 to 8).

### Modulation Type: Tracking
Tracking assigns velocity or note values to a parameter. Select “NOTE”, “VELOCITY”, or “VELOCITY TAKEOVER” (disables velocity affecting instrument volume) in source “SRC”. “LVAL” is the lowest value and “HVAL” is the highest value from source to scale to the assigned parameter. Note “LVAL” and “HVAL” values can be reversed so that the source’s range is inverted.

***

### Shortcuts

#### Navigating
* **[DIRECTION]**: Move cursor.
* **[OPTION]**+**[LEFT or RIGHT]**: Navigate to previous or next instrument.
* **[OPTION]**+**[UP or DOWN]**: Navigate +/- 16 instruments.
* **[SHIFT]**+**[LEFT or RIGHT]**: Will navigate to the phrase or table view respectively (from both the Instrument view or Instrument Envelopes view) and set the default FX command value to the instrument parameter that is highlighted.

#### Playing
* **[PLAY]**: Start/stops playing phrase.
* **[EDIT]**+**[PLAY]**: Preview instrument.
* **[SHIFT]**+**[PLAY]**: Continue song at chain position.
* **[OPTION]**+**[SHIFT]**: Mute current track (release option first to hold the mute).
* **[OPTION]**+**[PLAY]**: Solo current track (release option first to hold the solo).
* **[OPTION]**+**[SHIFT]**+**[PLAY]**: Clears all mute and solos.

#### Editing
* **[EDIT]**+**[UP or DOWN]**: Edit the selected value on the cursor’s position incrementing by large steps.
* **[EDIT]**+**[LEFT or RIGHT]**: Edit the selected value on the cursor’s position incrementing by small steps.
* **[EDIT]**+**[OPTION]**: Set the selected value to the default setting.
* **[SHIFT]**+**[OPTION]**: Copy currently selected modulation slot.
* **[SHIFT]**+**[EDIT]**: Paste modulation slot.
* **[EDIT+TOUCHSCREEN]**: Edit selected value with the position of a finger on any value with a visual slider.
* **[OPTION+TOUCHSCREEN]**: Assign the touchscreen axis to the selected parameter on any value with a visual slider. See the section on the MIDI Mappings view.