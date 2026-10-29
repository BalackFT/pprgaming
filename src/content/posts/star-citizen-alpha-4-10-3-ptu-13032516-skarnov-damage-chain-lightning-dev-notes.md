---
image: "/images/posts/star-citizen-alpha-4-10-3-ptu-13032516-skarnov-damage-chain-lightning-dev-notes.webp"
imageAlt: "Official Star Citizen render of a red-and-black Vanduul Glaive fighter firing its cannons as it banks over a planet's horizon"
imageCredit: "Image: Cloud Imperium Games"
title: "Star Citizen 4.10.3 PTU build 13032516 is out for Wave 1, and a CIG dev says the Skarnov got more than a text fix"
description: "CIG pushed a new Alpha 4.10.3 PTU build to Wave 1 on Wednesday with nastier Vanduul Mauler weapons, Nyx combat music, no more 4GB Vulkan cache cap and a pile of fixes. Designer ZacPreece_CIG then added that the LBCO Skarnov's damage went from 27 to 30, with longer chain lightning and a recoil pass."
date: 2026-10-28T20:38:00-04:00
category: star-citizen
tags: [star-citizen, alpha 4.10.3, ptu, lbco skarnov, vanduul, patch notes, devtracker]
starCitizen: true
sources:
  - { name: "RSI Spectrum — [Wave 1] Star Citizen Alpha 4.10.3 PTU Patch Notes 13032516", url: "https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-4-10-3-ptu-patch-notes-1" }
  - { name: "RSI Spectrum — ZacPreece_CIG reply on the Skarnov changes", url: "https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-4-10-3-ptu-patch-notes-1/9203716" }
  - { name: "RSI Devtracker", url: "https://robertsspaceindustries.com/en/community/devtracker" }
---
**New PTU build, and the Skarnov got some love.** Cloud Imperium put out a fresh **Alpha 4.10.3** build for **Wave 1** on Wednesday. Wakapedia-CIG's [patch notes](https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-4-10-3-ptu-patch-notes-1) went up at about 12:52 PM ET, and the game should now show **VERSION 4.10.3-PTU.13032516**. It's still the US-only PTU channel with long-term persistence on, and the test focus is the same as before: stability, bug fixes, LTP between PTU releases, the Vanduul Incursion missions and the LBCO Skarnov rifle. If you missed the first round, our [Wave 1 story from Friday](/news/star-citizen-alpha-4-10-3-ptu-wave-1-vanduul-incursion-skarnov-rifle/) covers what 4.10.3 adds.

**Vanduul Incursion changes**

- **Mauler weapons** were made "considerably more dangerous."
- The space combat music from Welcome To Nyx now plays when you're fighting Vanduul, and the tension detection system is active again.
- The **Board Ship** objectives were revised and balanced.

**The Skarnov, per the notes and per the dev**

The official notes only list two Skarnov items: a particle light on the secondary fire mode, and the rifle "updated" to a 30-round capacity. One backer in the thread asked about that, since the mag was already 30. Designer [ZacPreece_CIG answered](https://robertsspaceindustries.com/spectrum/community/SC/forum/190048/thread/star-citizen-alpha-4-10-3-ptu-patch-notes-1/9203716) at about 5:42 PM ET, and the reply also shows up on the [RSI Devtracker](https://robertsspaceindustries.com/en/community/devtracker). He said the capacity line was a narrative string fix, and that the rifle also got:

- its damage bug fixed ("should be!")
- damage raised from **27 to 30**
- a minor recoil pass
- chain lightning range increased from **5 to 7.5m**
- weight adjusted to be in line with other rifles

He signed off with "me forgetting to tell waka the above," which is about as CIG as it gets. Keep in mind this is a dev's note on a PTU build, not final live numbers. Things can still change before 4.10.3 goes live.

**Shader cache**

CIG removed the **4GB size limit on the Vulkan pipeline cache**. Full cache builds were going over that limit and getting thrown out on load, so players lost the prebuilt cache entirely. The notes say existing caches will rebuild once.

**Fixes worth knowing about**

All of these are listed as potential fixes:

- Life support going well over 100%
- A ship vented inside a planetary area not getting its atmosphere back, leaving the crew to freeze or suffocate
- mobiGlas contract scrolling getting stuck
- Ships clipping into the hangar loading platform when pulled from an ASOP terminal lobby
- The pay-impound-fine option missing from ASOP when a ship is impounded
- Hostile mission AI spawning and then standing still for 20 to 50 seconds before engaging
- Mission descriptions sending players to derelict outposts when the objective was actually a UGF bunker. Those spots are now described as **Abandoned Facilities**.
- The Skarnov and its magazine disagreeing on capacity, now both 30

CIG called out that four of these came from Issue Council reports: life support over 100% (STARC-205396, 249 contributors), the hangar platform clipping (STARC-137501, 101), the mobiGlas scrolling (STARC-190800, 83) and the missing impound fine (STARC-205713, 39).

**Still unknown:** CIG hasn't given a live date for 4.10.3.

**PPR take:** Honestly, the Issue Council callout is my favorite part of this one. 249 people reported that life support bug, and it got picked up. If you're in Wave 1, go put the Skarnov's new numbers to work on some Vanduul and keep those reports coming. o7
