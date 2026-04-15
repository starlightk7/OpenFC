# Debugging

This page will cover commons checks and procedures.

## The Basics

You will need to use a multimeter for diagnostics. There are two main types of tests you will need to perform: continuity and and voltage.

### Continuity Tests
* This will test that there is an electrical connection between the two points you touch with your probes.
   * Turn multimeter to continuity mode.
   * **Before testing, unplug the unit and turn the power button on to discharge the filter cap**. You will see the power LED briefly flicker. Never test continuity with the unit plugged in as you can damage components
   * Touch the probe between the two points. You should get 0 and a beep if successful. If you do not hear a beep, the number on the screen is the resistance between the points.

## Common Issues

### Dot Crawl or Other Visual Artifacts

If you see any, dial the trimmer capacitor. Turn in one direction to see if the symptom gets better or worse. If not, try the other direction. If the picture becomes black and white you've gone too far.

### Classic Famicom Buzz

It is possible to get a light hum on completely silent screens like the Everdrive Menu. This is due to innate defects in the HVC Famicom design and happens on unmodified stock machines, as well as other Power/AV boards like the Retrogame Restore one if you are not using an audio bypass (RF jumper enabled).

If this happens on your unit and it bothers you, there are several possible mitigations:

1) If you have a scaler like the Retrotink 4k, you can lower the "Pre-Amp Gain" under audio input. Put it to like -10 and itll eliminate the buzz without adversely affecting the audio. You can then save it to your profile. Other scalers may have similar capabilities

2) Instead of bridging JP2, try putting something like a 1.2k ohm resistor on it. This will dampen it significantly.

3) You can also do the normal audio bypasses connected to the A bypass slot, leaving JP2 open. You can do this if for example you wish to bypass with NESRGB audio.
