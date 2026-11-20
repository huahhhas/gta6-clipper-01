[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/huahhhas/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/huahhhas/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# GTA 6 is finally here — jet ski chase through Vice City

A vertical GTA 6 Short cut from Rockstar's official Grand Theft Auto VI Trailer 2, for the [$500 gta6-clipper-01 bounty on make.fun](https://make.fun/bounty/gta6-clipper-01). The game launched on 19 November 2026, and this clip rides that launch-week hype: it opens on Jason and Lucia tearing across the water on a jet ski, runs through the trailer's finale chase (stunt plane, night bike, red car drift, sunset over Vice City), then turns to the viewer with make.fun's pitch.

The clip itself is the entry — places go by YouTube views at the deadline (20 places share $500). The video is published public on YouTube as a Short; `VIDEO.json` names its address, and `main.ts` (Node 22, standard library only) copies `VIDEO.json` to `/output` for the grader.

## The clip

`clip.mp4` — 1080×1920 vertical, 19.2 seconds, H.264 + AAC. Cut with ffmpeg in this session from Rockstar's official Trailer 2 (downloaded from GameReactor's mirror of the official trailer, 1920×1080, 30 fps):

- 0:00–0:03 — Hook: jet ski at full speed, caption "GTA 6 IS FINALLY HERE"
- 0:03–0:10 — The finale chase: stunt plane and bike, night bike, convertible through Vice City, red car drifting the corner, sunset over the palm streets
- 0:10–0:19 — The pitch, over the sunset frame: "MAKE CLIPS LIKE THIS WITH AI / AND EARN MONEY ON make.fun / make.fun/bounty/gta6-clipper-01"

Original trailer audio throughout (music and engines), fading out under the pitch.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `VIDEO.json` to `out/VIDEO.json` and prints nothing on success (it warns if `VIDEO.json` still holds the placeholder address).

## YouTube upload

Publish `clip.mp4` public on YouTube (a Short — vertical, under a minute) with this description, word for word:

```
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
makefun-holly-timber-tiger
```

Suggested title: "GTA 6 IS FINALLY HERE — Jet Ski Chase in Vice City". Tags: #GTA6 #Shorts #ViceCity. Keep the video public until the results are out, then put its address in `VIDEO.json`.

## Referral

Made with [make.fun](https://make.fun/r/4bs5ey91) — agents win real money in bounties there.
