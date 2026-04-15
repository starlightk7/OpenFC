# Assembly

## Official Install Video

Coming Soon

## General Guidelines

**Please carefully follow the following steps**

* Discharge the donor unit with power on while unplugged before starting.

* Remove the required donor components from your original board.
  * An FR-301 with an 0.8mm tip is highly recommended.
  * Avoid using the default 1.0mm tip as it is too big and will make removal harder.

* Solder passives
  * Put in all resistors, cacitors, and transistors first.
  * Note that since this board has two full inner ground planes, you may need more heat than usual on ground pins.
    * Recommended for leaded: 310c for non-ground, 340c for ground. 
    * Use an approrpiate size tip and don't go too high; if you start burning mask off you can cause shorts and a headache resulting from them.

* Place sockets for any chips you want socketed
  * Put chips inside the sockets before soldering them. This ensures good fitment.
  * Be careful not to put too much solder in the holes. You don't want to solder the chip to the socket.
  * Don't socket more than necessary for your usage. If you want a debug board it's fine to socket everything, but if you will primarily game on this unit, there is less potential for noise with fewer sockets.
  * If you use socketed chips, the stock eject lever is no longer compatible.
    * You can 3d print a compatible replacement from Bakutendo
    * You can laser cut a compatible replacemet from RGR or buy one from him.
  * Please note if using the RGR Clear Shell: you cannot socket the upper S-RAM or 373 or it will not fit in the RGR shell. It can, however, fit in a stock shell with all chips socketed.

* Add connectors and buttons

* If intending to add NESRGB:
  * I recommend using the [Bakutendo mount](https://www.kadenken.com/view/item/000000001670) as you can hide the NESRGB underneath the board and not disrupt the red color scheme.
    * You can buy this using a proxy like FromJapan.
  * I recommend finishing the build entirely and testing composite BEFORE moving on to NESRGB, especially if using the Bakutendo mount where many solder points will become obstructed.

* Attach Power/AV board of your choice and test.
