---
image: "/images/posts/rsi-launcher-2-19-1-shader-compilation-new-download-panel.webp"
imageAlt: "Official Star Citizen image of three armored characters in skull-faced masks and helmets standing in a dark corridor, the one in front with glowing red eyes"
imageCredit: "Image: Cloud Imperium Games"
title: "RSI Launcher 2.19.1 can now build Star Citizen's shader cache before you log in, and adds a new download panel"
description: "CIG released RSI Launcher 2.19.1 on Tuesday. The headline feature is an optional shader compilation step after an install or update, which can take anywhere from about 7 to more than 30 minutes, plus a redesigned download panel, shader controls in settings and a sturdier data patcher."
date: 2026-11-04T07:41:00-05:00
category: star-citizen
tags: [star-citizen, rsi launcher, launcher 2.19.1, shaders, performance, patch notes]
starCitizen: true
sources:
  - { name: "RSI Spectrum — RSI Launcher 2.19.1 Release Notes", url: "https://robertsspaceindustries.com/spectrum/community/SC/forum/1/thread/rsi-launcher-2-19-1-release-notes" }
  - { name: "RSI Devtracker", url: "https://robertsspaceindustries.com/en/community/devtracker/" }
  - { name: "Cavalera — Star Citizen daily brief, November 4, 2026", url: "https://cavalera.news/?lang=en" }
---
**The launcher got a real update this time.** CIG pushed out **RSI Launcher 2.19.1** on Tuesday, November 3, with release notes posted by LoujoD_CIG in the [Spectrum announcements forum](https://robertsspaceindustries.com/spectrum/community/SC/forum/1/thread/rsi-launcher-2-19-1-release-notes). Launcher patches usually don't get much attention, but this one goes after something almost every backer has run into: the stutter and long first loads that come from shaders being built while you're already in the game.

**Full details: [official RSI Launcher 2.19.1 release notes on Spectrum](https://robertsspaceindustries.com/spectrum/community/SC/forum/1/thread/rsi-launcher-2-19-1-release-notes)** (the thread is also on the [RSI Devtracker](https://robertsspaceindustries.com/en/community/devtracker/)).

## What's new

**Shaders can be built before you log in.** When an install or update finishes, the launcher can now compile the game's shader cache up front, before you enter the 'verse. It's optional. You can skip it, launch right away and let the compiling finish on your next launch instead. According to the notes, as summarized by [Cavalera's daily brief](https://cavalera.news/?lang=en), the step can take anywhere from about 7 to more than 30 minutes depending on your machine, and it only fully works starting with game version **4.10.3**, which is still on the PTU right now.

**Shader controls in settings.** There are new options in the launcher settings to delete or compile shaders yourself. On Spectrum, LoujoD_CIG also replied that the delete action can take a while if there are a lot of older shader versions to clean up, so don't panic if it sits there for a bit.

**A new download panel.** A popover in the launcher header now shows the install that's running: version, channel, step-by-step progress, pause, resume and cancel, plus network, disk, CPU and memory use.

**A sturdier patcher.** The data patcher reports progress more smoothly, keeps running its verification pass until the files come back clean, gives more detailed error info, and shows its own dialog if your disk fills up mid-download.

There are smaller fixes too, like the launcher no longer muting or minimizing before it shows the "already running" message when you double-launch it.

**PPR take:** This is one of those updates I really like, even if it doesn't come with a shiny new ship. Anyone who's jumped in right after a patch knows the drill....the first half hour is a stutter-fest while your PC catches up on shaders. Letting the launcher do that work while I go grab a coffee is just a better way to do it. Fifteen or thirty minutes is a long wait, sure, but I'd much rather spend it on the launcher screen than in a choppy quantum jump or a hitchy fight. The catch is that it only really pays off once 4.10.3 hits Live, so for most of us the real test is coming with that patch. The new download panel is a nice touch as well. Being able to actually SEE what the launcher is doing, instead of staring at a progress bar and wondering if it froze, is something I've wanted for a long time. If you try the shader step on the PTU, keep an eye on how long it takes on your rig. o7
