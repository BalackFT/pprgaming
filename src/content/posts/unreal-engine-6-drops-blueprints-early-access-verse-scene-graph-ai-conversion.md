---
image: "/images/posts/unreal-engine-6-drops-blueprints-early-access-verse-scene-graph-ai-conversion.webp"
imageAlt: "Original illustration of faded Blueprint-style graph nodes crossed out in red next to a Verse code panel"
imageCredit: "Image: PPRGaming original illustration"
title: "Unreal Engine 6 won't have Blueprints at all, not even in Early Access, and Epic is betting on AI to move your UE5 project over"
description: "Epic's Marcus Wassmer says UE6, including Early Access, ships without Blueprints or the Actor Gameplay Framework. Gameplay moves to Verse and Scene Graph, and Epic says AI converted Fortnite's 20,000-plus Blueprints in two weeks. Developers aren't all sold."
date: 2026-11-22T16:40:00-05:00
author: "Ron Carter Jr."
category: industry
tags: [unreal engine, unreal engine 6, epic games, blueprints, verse, generative ai, game development]
starCitizen: false
draft: false
sources:
  - { name: "Unreal Engine - An update on Blueprints and the path to UE6", url: "https://www.unrealengine.com/news/an-update-on-blueprints-and-the-path-to-ue6" }
  - { name: "Unreal Engine on X - UE6 will not include Blueprints or the Actor Gameplay Framework", url: "https://x.com/UnrealEngine/status/2123810138117067123" }
  - { name: "PC Gamer - Unreal Engine 6 to jettison key scripting feature earlier than planned in favor of AI coding", url: "https://www.pcgamer.com/gaming-industry/unreal-engine-6-to-jettison-key-scripting-feature-earlier-than-planned-in-favor-of-ai-coding/" }
  - { name: "Unreal Source - UE6 will not include Blueprints or Actors after all", url: "https://unrealsource.com/d/ue6-removes-blueprints-actors/" }
  - { name: "Chet Faliszek on YouTube - Blueprints video", url: "https://youtu.be/-EPL0AxfHuc" }
---
**Blueprints are out of Unreal Engine 6 from day one.** Epic's EVP of development, Marcus Wassmer, confirmed it in a [Nov. 20 post on the Unreal Engine site](https://www.unrealengine.com/news/an-update-on-blueprints-and-the-path-to-ue6): "UE6, including UE6 Early Access, won't include Blueprints or the Actor Gameplay Framework. Gameplay will be built in Verse and on the new Scene Graph framework." The [official Unreal Engine account](https://x.com/UnrealEngine/status/2123810138117067123) posted the same change and pointed developers to UE6 AI tools they can already try in UE 5.9.

## What changed from June

This is a reversal. In June, Epic said Blueprints and Actors would live alongside the new framework in UE6 Early Access and 6.0, so studios could move a UE5 project over a piece at a time. Wassmer now says "recent advances in AI capability" mean Epic expects AI to "massively help with converting UE5 projects to UE6, if not make that process fully automatic," and that this lets Epic ship UE6 "on time (or sooner!)." As [Unreal Source](https://unrealsource.com/d/ue6-removes-blueprints-actors/) points out, Tim Sweeney had already announced the day-one removal at Unreal Fest Tokyo earlier this month. The Nov. 20 post is the written confirmation and the reasoning.

## Epic's case: Fortnite

Epic gives two reasons, per Unreal Source's summary of the post. One is Epoch AI research saying the cost of a given task with AI is falling about 13 times year over year, a trend Epic expects to continue. The other is Fortnite itself. Epic says it used AI to turn more than 20,000 Blueprints into roughly 3 million lines of Verse in two weeks, work it expected to take years, and it now has a working prototype running fully on Verse. Epic also says it's still validating performance, memory use and architecture, so that's a prototype, not a shipped result.

[PC Gamer](https://www.pcgamer.com/gaming-industry/unreal-engine-6-to-jettison-key-scripting-feature-earlier-than-planned-in-favor-of-ai-coding/) notes Blueprints aren't being deprecated in UE5, and Epic still says UE5 projects will be easy to convert.

## The pushback

Not everyone's buying it. Former Valve developer Chet Faliszek argued in [a video](https://youtu.be/-EPL0AxfHuc) that Blueprints gave artists and designers a middle ground between normal and expert, with deep access "in a safe way." Without them, it's learn Verse or prompt an AI. PC Gamer also talked to Eric Berger of Freshly Baked Games, who said Blueprints were a big part of how Queen's Domain got made, and that Unreal's AI push is already moving the studio to a different engine for its next project.

**PPR take:** I get why Epic wants one clean framework, and Verse plus Scene Graph might be the better engine long term. But Blueprints are how a lot of people got into making games in the first place. Artists, designers, solo devs, modders. That's the on-ramp, and Epic just pulled it out of UE6 Early Access instead of letting it fade out the way it promised in June. The whole plan now leans on AI conversion working on real projects, and right now the proof is a Fortnite prototype that Epic itself says is still being validated. Epic converting its own game, with its own engineers, isn't the same as a five-person indie team converting theirs. If the tools hold up, great. If they don't, a lot of small studios are going to stay on UE5 or walk, like Freshly Baked already is. I'd want to see those conversion tools in developers' hands before anyone calls this a win.
