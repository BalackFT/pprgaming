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
**The engineers took the questions this time.** CIG posted a new episode of [10 From the Community](https://www.youtube.com/watch?v=BA9qmg1Oz5M) today, [announced on X](https://x.com/RobertsSpaceInd/status/2113662919128826072) as a tech-focused episode on NPC behavior, social features, and performance and stability. CIG's CTO hosted, joined by two of Star Citizen's gameplay engineering directors, and they answered ten backer questions. The whole episode is worth a watch, but these are the parts I think most of us will care about.

## Social tools are next

The first drop is a chat revamp with **regional, location-based chat**, richer presence, a rebuilt chat widget and a new **Social app** that replaces the Comm-Link app. According to the team, the design is done, UI work has started, and in-game work is about to begin. They also expect you'll be able to chat while downed. No date was given. For anyone who's tried to find a group in Global chat, regional chat is the headline here.

## A 45-page desync explainer is almost done

The team says a **45-page** post explaining where desync comes from is nearly finished. A targeted change to how rigid-body objects sync over the network got a positive response in a recent Tech Preview, and ships and vehicles come after that. Desync is the thing that turns a good session into a bad one, so getting a real breakdown of the causes is a big deal.

## Squadron 42's AI is coming to the PU

The upgraded NPC behaviors built for Squadron 42 are signed off and are being brought over to Star Citizen. That means more combat roles than today's pusher, defender and strafer, plus better use of cover.

## Ground vehicles get a handling overhaul

Star Citizen currently uses three different vehicle physics setups. CIG plans to unify them on the best one, then add better drivetrain, braking, engine and suspension modeling, helped along by Planet Tech v5's smoother terrain.

## Fewer "feature roulette" patches

On testing, the team says it's doing deeper root-cause analysis on repeat offenders like freight elevators, hangars, ASOP terminals and ATC. It's also running bigger test plans **before** code is submitted, including multiplayer and server-recovery tests that used to happen afterward.

The rest of the episode covered the last pieces of the old Scaleform UI (the Comm-Link app, the vehicle manager and some visor elements, which should cut a UI render pass on the visor), LAMP coming to every vehicle including ground vehicles, and ground vehicles on freight elevators, which is still planned but only after the elevators are reliable and split off from ATC and the insurance flow. CIG also said selling or deleting ships earned in game is technically possible thanks to the entitlement system added in 4.8, but whether to allow it is a design call.

**PPR take:** No dates on any of it, and I'll admit that's the part that always gets me with these. But honestly, this is one of the more useful dev Q&As in a while, because it's the engineers telling us how they're attacking the stuff we deal with every night. Regional chat and that desync explainer are the two I'll be watching for. The testing changes matter too. If running multiplayer and server-recovery tests BEFORE code goes in means fewer patches where freight elevators or hangars break again, I'm all for it. And Squadron 42's AI showing up in the PU could change how a lot of FPS missions feel. Now let's see it in a patch. 🚀
