# Assembly

## Official Install Video

Coming Soon

## General Guidelines

**Please carefully follow the following steps**

WARNING: if you are sloppy with your work consider covering the button contacts with kapton tape. If you get any solder on the button contacts the board is permanently damaged and when it oxidizes the pads will stop working correctly. As such, if you happen to be producing your own boards, DO NOT USE HASL BOARDS for controllers. They will degrade quickly especially in humid climates.

### Player 1 Controller:

![image|1150x443](https://starlightk7.github.io/OpenFC/assets/P1Front.jpg)

* Features a single 8-bit shift register with a standard pinout.
* Various carbon printed resistors are used (white silk on the ENIG repro)
* Desolder and transfer the shift register. Chipquik will make it super easy.
* Install ~40kOhm 1/4W size through hole resistors to replace the carbon, as ENIG has no resistance
* For this model, I recommend installing them on the front like so to avoid conflicts with the cord routing.

![image|1007x450](https://starlightk7.github.io/OpenFC/assets/P1Back.jpg)

### Player 2 Controller:

![image|1148x451](https://starlightk7.github.io/OpenFC/assets/P2Front.jpg)

* Features a single 8-bit shift register with a standard pinout.
* Desolder and transfer the two ICs. Chipquik will make it super easy.
* Transfer the mic capacitor, speaker and resistor. 
* Install 40kOhm 1/4W size through hole resistors to replace the carbon, as ENIG has no resistance
* For this model, I recommend installing them on the back like so to avoid conflicts with the silicone pad.

![image|1197x515](https://starlightk7.github.io/OpenFC/assets/P2Back.jpg)

### Tuning Sensitivity

Making custom controllers is a bit of an art due to micro-tolerance issues. All parts being produced today tend to have ~0.1-0.3mm tolerance ranges; this applies to everything, PCBs, Silicone Pads, Dpads/Buttons, Shells, etc.

When building a custom controller it is possible that the combination of parts you use will have microtolerance issues, leading to decreased sensitivity on inputs. This also effects the stock PCB, which is why 3rd party Silicone pads are notorious for stiff diagonals. As my boards are 1:1 copies of stock, they may encounter the same problems.

Luckily, there is a cheap and easy way to tune these issues to your liking.

Before tuning, turn on and test your controller. I recommend doing something like sliding in Super Mario and also diagonal movements in Zelda. It is possible they will feel stiff, especially with 3rd party silicone pads or cases. Basically, 3rd party pads often are actually slightly big or small compared to the original ones. When you press, that makes them bend differently. I took some mitigations against this by widening the stock contacts a little and minimizing the distance between size, but it occasionally happens on a diagonal.

I recommend taking a 5mm hole punch onto 0.1mm sticker paper. Then start to augment the d-pad like so:

![image|364x370](https://starlightk7.github.io/OpenFC/assets/DPadSpacer.jpg)

Do it in 0.1mm increments until it feels right to you. Basically what happens here is, each layer of sticker will reduce how hard you must press on the pad to make contact. Usually no more than 0.3mm is needed

If you are using 3D printed parts, tuning is often not necessary since they are naturally thicker. But if you have any difficulty, use this process.

If you want to tune the buttons, put the sticker on the underside of the buttons.

Once tuned, the controller should feel very comfortable. Feel free to reach out if you need help
