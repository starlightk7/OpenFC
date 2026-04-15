# Design

## Goals

The goal of the OpenFC boards is to aim to be faithful to the original design as possible. I believe in right to repair and being able to repair as produced. I want us to be able to continue making and repairing these consoles for years to come so that future generations can continue to love the things I loved as a child.

## The Jailbar Problem

However, despite my stated goal, that doesn't meant that old consoles are without their share of problems that need to be dealt with. 

The original Famicom is notorious for terrible jailbars.　They are famously very visible in the original Super Mario Bros.

![image|960x540](https://starlightk7.github.io/OpenFC/assets/SMBRF.png)

These big vertical pillars can be quite distracting when playing games and they look terrible. The degree of visibility depends on the scene and the parts, cables, and television used, but they are in general notoriously bad like this.

## Why Does This Happen? Motherboard Edition

Let's look at why this is from a motherboard perspective. We'll start by looking at a snippet from our project schematic.

![image|645x399](https://starlightk7.github.io/OpenFC/assets/CompPPUSchematic.png)

Look at the positioning of VOUT - this is the composite video signal. Note how it travels to the other side of the purple lines, which in our schmatic are labeled as the PPU Address Lines.

Let's take a look at this composited on the actual board.

![image|476x469](https://starlightk7.github.io/OpenFC/assets/CompPPURouting.png)

You can see the composite video signal crosses directly over the VRAM bus. This is one of the biggest "don't do that's" of analog video. When the video is outputting, the VRAM is constantly active as it retrieves the contents to draw from VRAM. This causes a lot of noise as the addresses switch rapidly!

## Traditional Fixes

Traditional fixes varied. People have tried a range of solutions.

* Remove Q1, and wire a bypass mod.
  * Decent uplift, but still can pick up noise via antenna effect
* Cut trace at VOUT and wire a bypass mod
  * Best solution, cuts off the antenna noise
  * Can be restored later if desired
* Lift pin and wire a bypass mod
  * Please don't hurt the chip :-(
  * Much harder to restore a leg than a cut trace.

## OpenFC's Approach

While's it's "easy" to fix this problem via rerouting, my goal is to protect and preserve the original design. I want us to repair Famicoms in a way that *looks* like a Famicom for years to come. Many of these boards get trace rot and such a board restores them to their original iconic look and feel, especially when combining with a clear shell.

So I wanted to know: what can I do attack this problem *without* materially changing the design?

My answer was to convert the design to a 4-layer board where the inner two layers are full ground planes:

![image|466x475](https://starlightk7.github.io/OpenFC/assets/CompPPUShielding.png)

![image|462x482](https://starlightk7.github.io/OpenFC/assets/CompPPUShielding2.png)

This adds shielding between the two layers to help reduce interference.

## Results

Jail bars are near eliminated.

![image|960x540](https://starlightk7.github.io/OpenFC/assets/SMBOFC.png)

