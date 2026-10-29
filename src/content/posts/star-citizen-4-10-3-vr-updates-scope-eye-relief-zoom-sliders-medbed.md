---
image: "/images/posts/star-citizen-4-10-3-vr-updates-scope-eye-relief-zoom-sliders-medbed.webp"
imageAlt: "Official Star Citizen render of a soldier in gold-and-black armor holding a rifle, standing in front of a sleek brown ship with gold line patterns on a dusty landing pad"
imageCredit: "Image: Cloud Imperium Games"
title: "Star Citizen 4.10.3 brings VR scope eye relief, split zoom sliders and a medbed view fix, per CIG's Silvan"
description: "CIG's Silvan-CIG posted a list of VR changes for Alpha 4.10.3 on Spectrum: scopes now pull your view back as they zoom, the old zoom slider is split into separate scope and ship settings, third-person cameras stop zooming in VR, and medbeds point your view up at the screen."
date: 2026-10-29T08:00:00-04:00
category: star-citizen
tags: [star-citizen, alpha 4.10.3, ptu, vr, virtual reality, devtracker]
starCitizen: true
sources:
  - { name: "RSI Spectrum — Silvan-CIG: Alpha 4.10.3 VR Updates", url: "https://robertsspaceindustries.com/spectrum/community/SC/forum/3/thread/star-citizen-vr-support-experimental-release-alpha/9198827" }
  - { name: "RSI Spectrum — Star Citizen VR Support - Experimental Release (Alpha 4.8/4.9/4.10)", url: "https://robertsspaceindustries.com/spectrum/community/SC/forum/3/thread/star-citizen-vr-support-experimental-release-alpha" }
  - { name: "RSI Devtracker", url: "https://robertsspaceindustries.com/en/community/devtracker" }
---
**VR folks, this one's for you.** CIG's **Silvan-CIG** dropped a fresh list of VR changes for **Alpha 4.10.3** in the long-running [VR Support - Experimental Release thread](https://robertsspaceindustries.com/spectrum/community/SC/forum/3/thread/star-citizen-vr-support-experimental-release-alpha) on Spectrum. In [the post](https://robertsspaceindustries.com/spectrum/community/SC/forum/3/thread/star-citizen-vr-support-experimental-release-alpha/9198827), which went up on Sunday, October 25 at about 10:41 AM ET and also shows on the [RSI Devtracker](https://robertsspaceindustries.com/en/community/devtracker), he says "a few tweaks and fixes have been made to the new zoom for the latest patch." 4.10.3 is the patch currently in Wave 1 PTU testing. Our [latest PTU story](/news/star-citizen-alpha-4-10-3-ptu-13032516-skarnov-damage-chain-lightning-dev-notes/) has the rest of what's in it.

**Scope eye relief**

This is the big one. When a scope zooms your VR view, the view now **moves back along the scope** so more of the magnified image stays visible. Per Silvan, the pull-back scales with zoom up to a maximum:

- none at 1x
- 9 cm at 4x
- 15 cm at 6x and above

It adjusts smoothly when you switch zoom levels and fades in and out with the zoom. Vehicle ADS and Interaction Mode zooms aren't affected.

**Zoom settings and cameras**

- The old **Gameplay Zoom Strength** setting is gone. It's been split into separate **Scope Zoom Strength** and **Ship Zoom Strength** sliders, and neither one affects the Interaction Mode zoom anymore.
- Third-person cameras no longer zoom the VR view when the gameplay FOV changes, and ship ADS no longer zooms the ship's third-person view.
- New defaults: minimum scope zoom goes from 1.0 to **1.6**, scope align distance from 0.04 to 0.05, and zoom smoothing is shortened from 0.2 to 0.15 for snappier transitions.

**Medbeds and fixes**

- Medbeds now default your VR view to **looking up** instead of forward at your body, which Silvan says makes the screen easier to use "without breaking your neck!"
- Fixed texture banding on the scope projection texture.
- Fixed several crashes with the experimental VR depth composition option (`r_StereoDepthComposition`). That one is off by default. You have to turn it on through the console or user.cfg, and once it's on it stays on for later sessions.

**Still unknown:** CIG hasn't given a live date for 4.10.3, and as with anything on the PTU, it can still change before it goes live.

**PPR take:** I love seeing VR keep getting real attention. The eye relief change sounds like exactly the kind of small thing that makes scoped weapons actually usable in a headset, and the medbed fix made me laugh. If you fly in VR and you're in Wave 1, go give the new sliders a shot and drop your feedback in that thread. o7
