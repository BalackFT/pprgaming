---
image: "/images/posts/epic-easy-anti-cheat-linux-v2-fortnite-linux.webp"
imageAlt: "Official Epic Online Services artwork of dark hexagonal tiles with gaming and eye icons"
imageCredit: "Image: Epic Games"
title: "Epic is rebuilding Easy Anti-Cheat for Linux, and Fortnite is coming once it's ready"
description: "EAC Linux v2 skips a kernel driver and instead requires Secure Boot, TPM 2.0, a signed kernel and other Linux security features. Epic will pilot it in Fortnite first. No date yet, and no Steam Deck support for now."
date: 2026-10-17T07:54:00-04:00
category: industry
tags: [epic-games, fortnite, linux, anti-cheat, easy-anti-cheat, pc-gaming]
starCitizen: false
sources:
  - { name: "Epic Online Services — Awesome Gaming on Linux Without Cheating", url: "https://onlineservices.epicgames.com/news/introducing-easy-anti-cheat-linux-v2" }
  - { name: "Tom's Hardware — Epic introduces an improved version of anti-cheat for Linux", url: "https://www.tomshardware.com/video-games/pc-gaming/epic-introduces-an-improved-version-of-anti-cheat-for-linux-eac-linux-v2-will-finally-allow-linux-gamers-to-play-fortnite" }
  - { name: "The Verge — Epic is bringing Fortnite to Linux", url: "https://www.theverge.com/games/1010808/epic-fortnite-linux-anti-cheat" }
  - { name: "PC Gamer — Fortnite is coming to Linux once Epic improves Easy Anti-Cheat", url: "https://www.pcgamer.com/games/battle-royale/fortnite-is-coming-to-linux-once-epic-improves-easy-anti-cheat/" }
---
**Fortnite is coming to Linux.** In a [post on its Epic Online Services blog](https://onlineservices.epicgames.com/news/introducing-easy-anti-cheat-linux-v2), Epic says it is rebuilding its Linux anti-cheat from the ground up as **EAC Linux v2**, and that Fortnite will be the first game to use it.

Easy Anti-Cheat has supported Linux and Proton since 2021, but developers have to opt in, and many didn't because the Linux version couldn't match the protection on Windows. Epic says that gap is the reason Fortnite has stayed off Linux.

**How v2 works:** On Windows, EAC leans on a kernel driver. On Linux, Epic says it will **not** install a kernel module. Instead, a **systemd service** runs only while a protected game is open, along with eBPF programs, and the system has to meet these requirements:

- A **kernel and kernel modules signed** with a well-known key (Ubuntu, Fedora, Debian, openSUSE, Bazzite/Universal Blue and a few others are on the starting list)
- **TPM 2.0** and **Secure Boot** enabled, with **measured boot**
- **IOMMU** on, **kernel lockdown** in integrity mode, **kexec disabled** and the **BPF LSM** active

You don't have to run that setup all the time. Epic says you can keep a separate boot entry just for protected games, and that launching one without meeting the requirements only shows an error, not a ban.

**What's missing:** There's **no release date** for Fortnite on Linux. The **Steam Deck doesn't support the required features** yet, though Epic says it's talking with Valve. Epic plans to pilot v2 in Fortnite, then open it to other developers, and is asking distro maintainers to get in touch so their signing keys can be added.

**The catch:** As [Tom's Hardware points out](https://www.tomshardware.com/video-games/pc-gaming/epic-introduces-an-improved-version-of-anti-cheat-for-linux-eac-linux-v2-will-finally-allow-linux-gamers-to-play-fortnite), strict Secure Boot and TPM rules cut against the full-control ethos a lot of Linux players care about. [The Verge](https://www.theverge.com/games/1010808/epic-fortnite-linux-anti-cheat) and [PC Gamer](https://www.pcgamer.com/games/battle-royale/fortnite-is-coming-to-linux-once-epic-improves-easy-anti-cheat/) have more on the reaction.

**PPR take:** When the biggest holdout in competitive gaming builds a Linux path, that says a lot about how far Linux gaming has come. If v2 works, it could unlock far more than Fortnite.
