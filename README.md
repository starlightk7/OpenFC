# OpenFC

## Introduction

This repository contains OSHW Reproduction Parts related to the Famicom (FC) game console under the umbrella name OpenFC.

These parts are freely available under the terms of the [CERN-OHL-S](https://github.com/starlightk7/OpenFC/blob/main/LICENSE) license for you to use, study, modify, or sell. The source files are provided as-is with no warranty or entitlement for support to you or any users that you sell manufactured boards to. See [LICENSE](https://github.com/starlightk7/OpenFC/blob/main/LICENSE) and [NOTICE](https://github.com/starlightk7/OpenFC/blob/main/NOTICE) for details. Please carefully read these files to understand your obligations if you choose to distribute this project or modifications of it.

## Sample Build

<div><img src="https://starlightk7.github.io/OpenFC/assets/HVC-CPU-07.jpg" height="256" width="403"/></div>

## Usage

Suggested usage for the documents and boards in this repository:

* Studying the hardware and learning about it's function
* Aiding repairs and failure diagnostics through the created [schematics](https://starlightk7.github.io/OpenFC/#/schematic) and boardviews
* Repairing broken consoles via replacement, reproduction boards and tested replacement [BOMs](https://starlightk7.github.io/OpenFC/#/bom).
* Building a customized console as a DIY project, for hobby or educational purposes.

## Documentation

Please read the [documentation](https://starlightk7.github.io/OpenFC/) carefully before using the project.

You can also watch an HVC install video from [1upRestorations (English)](https://youtu.be/V8x1_Q33Uts)

## Getting a Board

The project officially distributes boards from [Japan (inexpensive international shipping available)](https://ko-fi.com/starlightk7/shop), the [US](https://1uprestorations.com/collections/console-mod-parts/) and the [UK](https://www.retroupgrades.co.uk/). If you just wish to simply obtain a board for yourself, it will often be cheaper than ordering from the fab directly.

***Support is offered to those who purchased a board from a vendor listed below. No support is provided for fabricating these files on your own. If you choose that route, you should understand what you are doing and are responsible for ensuring it is done right. I am not responsible for any defects that may arise from improperly manufacturing these files, or for defects arising from modifications made by you or your PCB fab during manufacturing. If you produce these boards for sale without becoming an authorized distributor, you are responsible for any and all customer support related to the product as well as your compliance with the project's license***. 

If you have any questions about this, feel free to contact with questions. If you are interested in becoming an authorized distributor for your region, and thus gaining support for your users, please contact me via Discord or Twitter.

The ultimate goal of this project is to eventually document and reproduce all models, but it will take quite some time. If you believe in the long term goal, consider subscribing on Ko-Fi; labor aside, donor boards to research, prototypes, and parts are all expensive, and those funds will help offset those costs to complete more boards.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W31LT5Y4)

Feel free to come chat with us on Discord: [![demo](https://img.shields.io/discord/1424189475436625921?logo=discord)](https://discord.gg/DjXvPDA6Vv)

All boards in this project are ~40 years old at the time of writing. All relevant patents worldwide have long expired. This project is not affiliated with or endorsed by the big N.

## Commissions

I do not have time to build commissions on a regular basis, however, there are members of the retro community whom offer this service.

| US/Canada |
|-----------|
| [1upRestorations (United States)'](https://1uprestorations.com/) |

## Disclaimer

**WARNING:** Doing a full build is an advanced project. Please carefully read the documentation and required skills and experience before purchasing or ordering a board. Purchasing boards and parts does not guarantee that you can be successful in doing a build. Significant experience in soldering and desoldering, along with a variety of tools are necessary. Your first build will likely not work on its first boot. Patience, analysis, and debugging will likely be necessary to bring the unit online. Order at your own risk. The author provides no guarantee of your success, and also cannot guarantee that any given vendor can fabricate these boards correctly. If you are ordering boards, please consult with your target vendor before ordering if you wish to order a board.

## Parts Index

### Motherboards

| Part Number | Description | Region | Status| Japan | United States | United Kingdom |
|-------------|-------------|----------------------|-------|-------|---------------|----------------|
| HVC-CPU-01 | AV Famicom / New Famicom | NTSC-J | Need Donor  | N/A | N/A | N/A |
| HVC-CPU-02 | AV Famicom / New Famicom | NTSC-J | Need Donor  | N/A | N/A | N/A |
| HVC-CPU-03 | AV Famicom / New Famicom | NTSC-J | Planned     | N/A | N/A | N/A |
| HVC-CPU-04 | AV Famicom / New Famicom | NTSC-J | Planned     | N/A | N/A | N/A |
| HVC-CPU-05 | AV Famicom / New Famicom | NTSC-J | Planned     | N/A | N/A | N/A |
| HVC-CPU-06 | AV Famicom / New Famicom | NTSC-J | Planned     | N/A | N/A | N/A |
| HVC-CPU-07 (1984) | The most common HVC motherboard. Most often comes with Rev. E chips. | NTSC-J | Released | [Ko-Fi (Direct)](https://ko-fi.com/starlightk7/shop), [eBay (Direct)](https://www.ebay.com/usr/starlightk7), [Etsy (Direct)](https://starlightretro.etsy.com) | [1upRestorations](https://1uprestorations.com/collections/console-mod-parts) | [RetroUpgrades](https://www.retroupgrades.co.uk/product/opensfc-shvc-bundle) |
| HVC-CPU-GPM-01 | Redesign that worked on lowering EMI for VCCI compliance | NTSC-J | Planned | N/A | N/A | N/A |
| HVC-CPU-GPM-02 | Redesign that worked on lowering EMI for VCCI compliance | NTSC-J | Planned | N/A | N/A | N/A |
| HVCN-CPU-01 | AV Famicom / New Famicom | NTSC-J | Need Donor  | N/A | N/A | N/A |
| HVCN-CPU-02 | AV Famicom / New Famicom | NTSC-J | In Progress | N/A | N/A | N/A |

### Power AV

| Part Number | Description | Region | Status| Japan | United States | United Kingdom |
|-------------|-------------|----------------------|-------|-------|---------------|----------------|
| KP-782 | Early Type Original Power / RF Board | NTSC-J | Planned | N/A | N/A | N/A |
| KP-917 | Late Type Original Power / RF Board | NTSC-J | In Testing | N/A | N/A | N/A |
| OFC-PWRAV-01 | Original Design. Backport of SFC-style Power/Audio circuit w/ THS7314 for Composite Video. | NTSC-J | Released | [Ko-Fi (Direct)](https://ko-fi.com/starlightk7/shop), [eBay (Direct)](https://www.ebay.com/usr/starlightk7), [Etsy (Direct)](https://starlightretro.etsy.com) | [1upRestorations](https://1uprestorations.com/collections/console-mod-parts) | [RetroUpgrades](https://www.retroupgrades.co.uk/product/opensfc-shvc-bundle) |

### Controllers

| Part Number | Description | Region | Status| Japan | United States | United Kingdom |
|-------------|-------------|----------------------|-------|-------|---------------|----------------|
| 56.8231A | Found in Early Circle Button Controllers Pre-NES Launch | NTSC-J | Planned | N/A | N/A | N/A |
| 56.8231B | Found in Most Circle Buttton Controllers. Official NES Support | NTSC-J / NTSC-U | Released | [Ko-Fi (Direct)](https://ko-fi.com/starlightk7/shop), [eBay (Direct)](https://www.ebay.com/usr/starlightk7), [Etsy (Direct)](https://starlightretro.etsy.com) | [1upRestorations](https://1uprestorations.com/collections/console-mod-parts) | [RetroUpgrades](https://www.retroupgrades.co.uk/product/opensfc-shvc-bundle) |
| 56.8232A  | Circle Button Player 2 Controller | NTSC-J | Released | [Ko-Fi (Direct)](https://ko-fi.com/starlightk7/shop), [eBay(Direct)](https://www.ebay.com/usr/starlightk7) | [1upRestorations](https://1uprestorations.com/collections/console-mod-parts) | [RetroUpgrades](https://www.retroupgrades.co.uk/) |

### Cartridges

There are none currently in progress, but they are planned for future.

### Accessories

There are none currently in progress, but they planned for future.


