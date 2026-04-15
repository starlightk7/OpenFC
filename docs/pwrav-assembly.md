# Assembly

## Official Install Video

Coming Soon

## General Guidelines

**Please carefully follow the following steps**

* I recommend assembling the back first, as it otherwise will not sit flat. Install all of the SMDs
  * Note that this board is 4-layer with double-inner ground. So you may need a little more heat for GND pins
  * I generally use 310c for normal, 340c for ground.

* For the top side, start with the 33uf caps. 
  * This space is really tight when fully assembled, and if you wait until last you'll have a hard time soldering them.
  * Be careful as you don't want to burn the mask in between the two or it's easy to cause a short.

* Work clockwise around the board
  * Work through the remainder of the power section before doing the video/audio section. 
  * Skip the heatsink, ports, and switches until last.
  * Don't attach the console motherboard yet either.

* When applying the heatsink, put a dab of MX4 both on the copper plane underneath the heatsink, and on the back of the L7805CV

* Install the ports and switches

* Please see the Debugging secction for bring-up/testing/debugging steps. Follow this before attaching your console.
