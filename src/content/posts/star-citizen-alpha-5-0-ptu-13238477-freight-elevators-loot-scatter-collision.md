---
image: "/images/posts/star-citizen-alpha-5-0-ptu-13238477-freight-elevators-loot-scatter-collision.webp"
imageAlt: "Official Star Citizen image of a snowy mountain range under a stormy sky, with sunset-lit clouds over the peaks"
imageCredit: "Image: Cloud Imperium Games (via X)"
title: "Star Citizen Alpha 5.0 PTU 13238477: rebuilt freight elevators, a loot tuning pass, and no more snagging your ship on planet scatter"
description: "CIG pushed Alpha 5.0 PTU build 13238477 to Wave 3 on Thursday. Freight elevators at Starchitect landing pads get rebuilt, loot boxes now favor rifle, LMG and SMG ammo, and small planet scatter stops catching ships and gravlev bikes."
date: 2026-11-20T07:50:00-05:00
author: "Ron Carter Jr."
category: star-citizen
tags: [star-citizen, alpha 5.0, ptu, genesis, nyx i, starchitect, freight elevators, loot]
starCitizen: true
sources:
  - { name: "RSI Spectrum - [Wave 3] Star Citizen Alpha 5.0 PTU Patch Notes 13238477", url: "https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-5-0-ptu-patch-notes-3" }
  - { name: "RSI Spectrum - Star Citizen Alpha 5.0 PTU Patch Notes (previous Wave 3 build 13228337)", url: "https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-5-0-ptu-patch-notes-2" }
  - { name: "RSI Status", url: "https://status.robertsspaceindustries.com/" }
  - { name: "PPRGaming - Star Citizen Roadmap Roundup, November 18", url: "https://pprgaming.com/news/star-citizen-roadmap-roundup-november-18-alpha-5-0-combat-balance-loot-refresh/" }
---
**Another day, another 5.0 build.** CIG pushed another **Alpha 5.0** build to the PTU on Thursday: **VERSION 5.0.0-PTU.13238477**. The [official patch notes are on Spectrum](https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-5-0-ptu-patch-notes-3). It's still **Wave 3** testers only, the PTU channel is **US only**, and **long-term persistence** is on. That comes one day after [build 13228337](https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-5-0-ptu-patch-notes-2). Live is still on **4.10.3** per the [RSI status page](https://status.robertsspaceindustries.com/).

The test focus list hasn't changed: Genesis (Planet Tech V5), Nyx I, Starchitect points of interest, mission boards and local missions, intraplanetary server meshing, vehicle time-to-kill balance and the missile lock interface update.

## Freight elevators get rebuilt

This is the big one if you've been hauling on the PTU. CIG pulled the freight elevator **out of the interior physics grid**, so its console finally has proper collision. The side room is now its **own standalone maintenance building**, and the notes say that also fixed players getting pushed back when they walked up to the console. Every landing pad that used the old combined elevator tile now uses the new layout, with the areas around it resized to fit.

There's a stack of Starchitect cleanup with it: missing ledges on the 100m and 140m landing pads, spawn closets sitting below the mesh, and turrets at some compounds firing when they shouldn't.

## Loot gets a tuning pass

Loot distribution got tuned across the board. **Rifle, LMG and SMG ammo** now gets priority in loot boxes, shoes and jackets are out of the small generic container, and loose commodities are **temporarily disabled** until CIG can set their quality properly. AI also carry spare magazines in their backpack now, when they have one. That lines up with the loot refresh CIG put on the [Roadmap Roundup](/news/star-citizen-roadmap-roundup-november-18-alpha-5-0-combat-balance-loot-refresh/) this week.

## Genesis, Nyx I and scatter collision

On the planet side, a GPU-driven terrain skirt now hides the seams where neighboring patches meet. Scatter that used to ignore only wheeled vehicles now **ignores all vehicles, ships and gravlev included**, so you won't catch on small stuff flying low or riding a bike. Nyx I also gets cloud ambient occlusion tuning, plus shader and water work.

## Fixes and crashes

The Zenith sniper rifle locking up after a manual reload is addressed (STARC-200248), the Rock Cracker dungeon's event handling was rebuilt, and New Babbage and Orison clothing racks should take your items again. CIG lists **five crash fixes**, four of them server-side, including a GPU crash hitting both the PU and Arena Commander (STARC-223665).

**PPR take:** I know, freight elevators aren't exciting....until you've hauled a load and watched the console push you away. Getting that right before 5.0 hits Live matters a lot more than another flashy feature. The scatter collision change is a sneaky good one too. Think about it, Genesis planets are covered in little stuff, and catching a skid on some rock you can barely see is exactly the kind of thing that gets old fast. The loot pass reads like CIG listening to the FPS crowd, ammo where you actually need it and no more pulling jackets out of a crate. Loose commodities being switched off "temporarily" is the one I'll keep an eye on. Still no Live date for 5.0, BUT builds every day or two is the pace you want to see.
