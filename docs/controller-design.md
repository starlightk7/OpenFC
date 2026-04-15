# Design

The goal of the OpenFC boards is to aim to be faithful to the original design as possible. I want us to be able to continue making and repairing these consoles for years to come.

## Problems With The Original Design

In the case of controllers, they have not proven durable over time. The originals used carbon printed button contacts, carbon printed resistors, and even a carbon printed volume slider!

Here is an example of the original boards.

![image|1120x448](https://starlightk7.github.io/OpenFC/assets/P1Stock.png)

![image|1088x431](https://starlightk7.github.io/OpenFC/assets/P2Stock.png)

 Over time, the carbon starts to break down and disintegrate, and eventually the controller stops working. 

Did you notice the pads?

![image|688x304](https://starlightk7.github.io/OpenFC/assets/P2Stock.png)

They're almost completely gone on P1; and P2 is wearing down too. This poor Controller 1 was basically non-functional because of no remaining carbon where the pad hits.

## Traditional Fixes

The best you could really do with these was get some carbon-paint / ink and fill them back in, but that stuff isn't very durable and breaks down again quickly with abrasive contact like button pressing.

## OpenFC's Approach

I designed the PCBs with minimal changes such that they could be printed in beautiful ENIG as well as carbon.

![image|1150x443](https://starlightk7.github.io/OpenFC/assets/P1Front.jpg)

![image|1148x451](https://starlightk7.github.io/OpenFC/assets/P2Front.jpg)

The ENIG finish is much more durable than the original carbon, and unlike HASL, it is resistant to oxidation (do not print controllers in HASL, they will oxidize and work poorly).

However, conversion to ENIG brings with it one problem: these boards rely on carbon printed pull-up resistors, but ENIG has no natural resistance. Without these resistors, the board would malfunction, especially if they were hard shorted by ENIG traces.

To fix this, I added through holes at each point where a carbon resistor is printed. The user can choose to print in carbon by asking a capable PCB fab ot print carbon along the white silk path @ 40k resistance, or they can simply add through hole resistors to fill the function. If these resistors are installed on the back, the controller will look like stock on the front. 

![image|1007x450](https://starlightk7.github.io/OpenFC/assets/P1Back.jpg)

![image|1197x515](https://starlightk7.github.io/OpenFC/assets/P2Back.jpg)

This is the most faithful compromise to keep the design and the original routing intact while preserving the option to use carbon printing exactly like stock.

In the case of Controller 2, the volume slider was also carbon printed. To combat this, I broke up the volume slider into 8 unique steps. 

![image|1148x451](https://starlightk7.github.io/OpenFC/assets/P2Steps.jpg)

I then mounted a resistor network on the back to simulate variable resistance. 

![image|1197x515](https://starlightk7.github.io/OpenFC/assets/P2RN.jpg)

I am recommending 27ohm per step based on measurements of a few real controllers. For ease of soldering it is provided as a SOIC-16 chip.
