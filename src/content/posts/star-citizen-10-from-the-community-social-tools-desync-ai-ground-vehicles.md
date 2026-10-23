---
image: "/images/posts/star-citizen-10-from-the-community-social-tools-desync-ai-ground-vehicles.webp"
imageAlt: "Thumbnail for Star Citizen's 10 From the Community episode with CIG's engineering leads"
imageCredit: "Image: Cloud Imperium Games / YouTube"
title: "Star Citizen's new 10 From the Community: regional chat and a social app are next, a 45-page desync post is nearly done, and ground vehicles get a physics overhaul"
description: "CIG's CTO and two gameplay engineering directors answered ten backer questions about the tech behind Star Citizen, covering regression testing, the end of Scaleform UI, social tools, LAMP on every ship, ground vehicles on freight elevators, desync, NPC AI and ground vehicle handling."
date: 2026-10-23T14:30:00-04:00
category: star-citizen
tags: [star-citizen, 10 from the community, social tools, desync, ai, ground vehicles, freight elevator, cig]
starCitizen: true
sources:
  - { name: "@RobertsSpaceInd on X — A new episode of 10 From the Community is live", url: "https://x.com/RobertsSpaceInd/status/2113662919128826072" }
  - { name: "Star Citizen on YouTube — 10 From the Community (engineering episode)", url: "https://www.youtube.com/watch?v=BA9qmg1Oz5M" }
---
**The engineers took the questions this time.** Cloud Imperium posted a new episode of [10 From the Community](https://www.youtube.com/watch?v=BA9qmg1Oz5M) today, [announced on X](https://x.com/RobertsSpaceInd/status/2113662919128826072) as a tech-focused episode on NPC behavior, social features, and performance and stability. CIG's CTO hosted, joined by two of Star Citizen's gameplay engineering directors, and they answered ten backer questions.

**The highlights:**

- **Fewer "feature roulette" patches:** the team says it's doing deeper root-cause analysis on repeat offenders like freight elevators, hangars, ASOP terminals and ATC. It's also running bigger test plans **before** code is submitted, including multiplayer and server-recovery tests that used to happen afterward.
- **Scaleform is almost gone:** the last big pieces of the old UI tech are the Comm-Link app and the vehicle manager, which is being replaced by the vehicle loadout system, plus some visor elements. Removing it cuts a UI render pass on the visor, which should help performance.
- **Social tools are next:** the first drop is a chat revamp with **regional, location-based chat**, richer presence, a rebuilt chat widget and a new **Social app** that replaces Comm-Link. The design is done, UI work has started, and in-game work is about to begin. CIG also expects you'll be able to chat while downed. No date was given.
- **LAMP on every ship:** the team checked with the creative side, and the answer was every vehicle, ground vehicles included. Static canopies need an engine fix so CIG doesn't have to re-author 100-plus ships.
- **Ground vehicles on freight elevators:** it's still planned, but only after freight elevators are made reliable and the system is separated from ATC and the insurance flow.
- **Desync:** a **45-page** post explaining where desync comes from is nearly finished. A targeted change to how rigid-body objects sync over the network got a positive response in a recent Tech Preview, and ships and vehicles come later.
- **NPC AI:** the upgraded AI behaviors built for Squadron 42 are signed off and are being brought to Star Citizen, with more combat roles than today's pusher, defender and strafer, plus better cover use.
- **Ground vehicle handling:** Star Citizen currently uses three different vehicle physics setups. CIG plans to unify them on the best one, then add better drivetrain, braking, engine and suspension modeling, helped by Planet Tech v5's smoother terrain.

The team also said selling or deleting ships earned in game is technically possible thanks to the entitlement system added in 4.8, but whether to allow it is a design call.

**PPR take:** No dates, but this is one of the more useful dev Q&As in a while. Regional chat and a real desync explainer are the two things to watch.
