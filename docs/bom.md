# Bill of Materials (BOM)

## Parts List

A list of compatible parts are 
The [following spreadsheet](https://docs.google.com/spreadsheets/d/13th4zroz0r7O9s9GHs4QAAxwlmDmMiFISxEJqjc-3Zw/edit?gid=164838887#gid=164838887) contains a description of required donor parts for the project as well as a mouser-based BOM if you'd like to use as many new parts as possible'. Each board has its own sheet.

Quick Links:

* [HVC-CPU-07](https://docs.google.com/spreadsheets/d/13th4zroz0r7O9s9GHs4QAAxwlmDmMiFISxEJqjc-3Zw/edit?gid=1574479780#gid=1574479780)
* [OpenFC PWRAV Rev. C](https://docs.google.com/spreadsheets/d/13th4zroz0r7O9s9GHs4QAAxwlmDmMiFISxEJqjc-3Zw/edit?gid=404748583#gid=404748583)
* [56.8231B (P1 Controller)](https://docs.google.com/spreadsheets/d/13th4zroz0r7O9s9GHs4QAAxwlmDmMiFISxEJqjc-3Zw/edit?gid=1385371868#gid=1385371868)
* [56.8232A (P2 Controller)](https://docs.google.com/spreadsheets/d/13th4zroz0r7O9s9GHs4QAAxwlmDmMiFISxEJqjc-3Zw/edit?gid=658933868#gid=658933868)

## Interactive Guides for Assembly Assistance

These files visually show you where a given part number is located on the board. It is harder to keep these resources up to date with in-stock parts, so the actual part list is maintained in the spreadsheet above.

* [HVC-CPU-07](https://starlightk7.github.io/OpenFC/ibom/ibom-hvc-cpu-07.html)
* [OpenFC PWRAV Rev. C](https://starlightk7.github.io/OpenFC/ibom/ibom-pwrav.html)
* [56.8231B (P1 Controller)](https://starlightk7.github.io/OpenFC/ibom/ibom-p1.html)
* [56.8232A (P2 Controller)](https://starlightk7.github.io/OpenFC/ibom/ibom-p2.html)

## Donor Identification

### Japanese Units

Unless there has been shell swapping going on, HVC Famicoms generally do not feature the FF logo on the front sticker. I recommend serial range H-prefix 7-8 million for a donor unit (not HC or HV), as this should land you a Rev. E HVC-CPU-07 which is ideal. Avoid serial number < 5 million when building an HVC-CPU-07. These units may feature older, buggy revisions of chips that may not function properly on the OpenFC design.

### Compatibility Notes

## HVC-CPU-07

The native chips for this board are E & E-0. Some very early HVC-CPU-07's contain a D CPU. Some very late ones include a G series CPU/PPU. I recommend using the E series chips for best results. Do not use the revisionless CPU or PPUs, or rev A, B, or C PPU. Avoid Rev. D as it is not compatible with most mods.

## OpenFC Composite / Power AV

OpenFC Composite is primarily tested on and recommended for usage with the Rev. E CPU/PPUs, where are native to the majority of the HVC Famicoms. 

Different PPU revisions have slightly different voltage levels due to differences in their silicon and parasetics. Particularly when doing composite video output, you may need to fine-tune slightly if using another chip revision. I will try to document guidance for each revision as I complete more builds. 

I cannot guarantee support on every possible revision, but if you want to try an unsupported version I can help you tune it if necessary, although you'll need access to an oscilloscope to do so.

For use with 3rd party video mods using the bypass connections, revision compatibility is up to the mod.

## KP917 RF Board (Coming Soon, Under Testing)

At this time, the only recommended mode of building is transplant. The model number of RF boards is sometimes hard to see (underneath the shield or large switch) or sometimes missing entirely. There are a handful of major models, and the unit you have may or may not be compatible with the current OpenFC KP917 board. 

The general way to tell is this:

![image|574x370](https://starlightk7.github.io/OpenFC/assets/KP917Compat.jpg)

If the two circled components match the picture, your donor is compatible. If they both look like the component on the right, donor is not compatible. In the future, I will also make boards for the other variants.


