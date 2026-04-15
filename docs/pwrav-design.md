# Design

One of the primary problems with the original Famicom is that it was RF-only. In many regions of the world today, TV's have not even included an analog tuner for over 10 years. In many cases, a device such as a VCR is needed as an intermediary to run these devices, and then the resulting quality is very poor.

As such, I wanted to provide an open source option for composite output, which could also color-match your OpenFC mainboard. 

# Goals

The composite board is a fun what-if board: it backports power and audio setup from the Super Famicom. It shares as many parts as possible with [OpenSFC](https://starlightk7.github.io/OpenSFC/), and serves as a way to gut check if you are able to handle assembling an OpenSFC. By trying out this board at a smaller scale, you can gauge your readyness to level up to the next challenge while upgrading your existing system and learning a bit along the way.

# Features

We'll walk through the features of the OpenFC board.

## Power

Classic 7805-based design that is a backport of the PAL SNES power supply. Provides the typical 5V power rail off of the 7805, but also a gated 9V audio rail just like on the SNES. 

### Common Mode Choke

The OpenFC composite board adds the same common-mode-choke as is found on the SNES. This helps decouple the incoming power form the common mode noise found in your home's electrical system.

### Full Bridge Rectifier

The PAL version was chosen for the backport in order to add a full bridge rectifier. In the US, NES power adapters are 9V AC step-down converters. People commonly plug them into imported Famicoms and kill the systems. By putting a full bridge rectifier in, the unit supports these AC power supplies as well as becoming polarity agnostic for DC power. This ensures that the unit is not killed no matter which power supply is used?

### Axial Fuse

The familiar fuse from the SFC is used to protect from overcurrent. Like with the SFC, it is suspended over a gap in the board so if an incoming surge burns it hard, it is isolated from the main board to avoid any lasting damage. These fuses are not self-healing so make sure to test for shorts before powering on.

### Classic Linear 7805 Power

Many upgraded power supplies switch to modern switching power-supplies, advertising less heat and greater efficiency as benefits. But these old machines aren't really equipped for handling switching noise. That noise can show up as visible artifacts in the picture or noise in your audio.

The truth is, the power difference on a system like the original Famicom is completely negligible, and the heat can be mitigated with a good design. OpenFC's heat sink design keeps the system cool to the touch. Even after 24 hours straight of running inside the case with NESRGB + EDN8 Pro, the average temp I recorded with FLIR was only 37.5c - roughly the same as the motherboard itself. This is cool to the touch and a complete non-issue.

### 2200uF Filter Capacitor

Since the system can now handle AC, a large 2200uF filter capacitor, matching that of the PAL SFC and US NES is installed. However, due to clearance issues, a fat, low-profile one is used instead of the same part number as SFC.

### Status LEDs / Test Pads

The large switch serving in place of the TV/GAME switch is a standby power toggle. You can turn the board fully off by toggling it off. When standby is on, an orange (by default) LED will be lit. When the system is powered on, it will switch to the red (by default) LED. On the back there is a +5V and +5VS test pad. The S is standby voltage. The normal is only when powered on. You can use this when testing the board or to attach mods to.

### Heatsink Design

The heatsink lays on a large exposed copper plane, which is heavily stitched. The board is 4 layer with 2 full inner ground planes. The stitching helps dissipate heat throughout the inner layers. Thermal paste is applied between the heat sink and the copper plane. The 7805 lays flat on top of the heatsink and also has thermal paste between it and the top of the heatsink. Then the 7805 is screwed in. This helps keep the entire system running cool to the touch, even after extended periods of operation.

## Video

### Composite Video

Composite video is done via a THS7314. The original ribbon can be bought in attached as-is, with no bypass needed for quality video. When using OpenFC, you'll get nice clean composite. When using a normal stock board, the picture will be greatly improved over stock, but there may be faint jailbars. See the benchmarks page for details.

The circuit is tuned around Rev. E chips by default, which is the dominant chips in the original HVC Famicom. If you are using other revisions, there may be slight variance in the voltage levels depending on the chip version. If the picture is too bright, increase R4/R5. If it's too dim, decrease. I will add recommended values for other revisions as I complete a wider variety of builds.

### RGB / Bypass

Connection points are provided to attach NESRGB or a composite bypass. You may also be able to attach Lava RGB or RGB2C02N but I have not tested it at this time.

When connecting mods: if the mod already provides 75 ohm on the composite line, put a 0 ohm jumper or bridge R1.

**Note for Scart Users:** Genesis 2 outputs TTL C-Sync and expects there to be a 470ohm resistor in the SCART head. Because the resistor is normally in the SCART head, the line on the board is a straight connection. Be sure you are using a cable that is set up correctly per Genesis 2 spec. If your mod outputs 75ohm csync already, you may not get signal. In this case, you can wire Luma as sync since the port does not use S-Video. 

## Audio

Two modes are supported: mono and stereo as dual mono. Which mode you use will depend on what type of Genesis cable you are using.

* Mono: outputs on pin 6
  * Passes through stock output with basic filtering
  * Used with true mono cables like Sega 32x Mono Cable
* Dual Mono as Stereo: outputs on Pin 8 (L) and 9 (R)
  * Uses an Op Amp as a Unity Gain Buffer for proper Dual Mono
  * Used with stereo Genesis cables like Retrofrog or HD Retrovision

