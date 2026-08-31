---
slug: 'deprecated-wrong'
title: 'You might be using "deprecated" wrong'
date: '2026-08-31T09:30:00.000Z'
---

I've seen this in changelogs, READMEs, and announcements (and I've personally written some changelogs) with "This API is **going to be deprecated**" or "This API **will be deprecated**". This is almost always wrong. Deprecation isn't something that happens in the future. The public announcement is what makes it deprecated.

[Deprecation](https://en.wikipedia.org/wiki/Deprecation) is the discouragement of use, and hopefully that discouragement also includes the recommended alternative. 

## Deprecation is not a countdown

To deprecate something is to formally tell the world: "this still works, but we recommend you building new things with it." That state begins the instant you publish the announcement. So "going to be deprecated" is a contradiction — it either is deprecated or it isn't. There is no in-between limbo where an API is "going to be deprecated."

## So what about the date?

The date in the announcement is the **discontinue date**, sometimes call a **sunset date** or **end of life**. This is the day the API stops working, gets removed, or starts returning errors.

These are two distinct events on a timeline:

1. **Deprecation** — the announcement that the API is on its way out. It still works. No behavior changes yet.
2. **Discontinue** — the date the API is removed or stops functioning.

Collapsing them into one "deprecation date" hides the most important information: how long do I have? The gap between those two dates is the migration window, and that's exactly what consumers need to plan around.

## A deprecation without a recommendation is incomplete

If you deprecate an API, your job is only half done unless you also tell people what to use instead. A good deprecation announcement answers three questions:

- **What** is deprecated?
- **When** will it be discontinued?
- **What should I use instead?**

The last one matters more than ever now that agents and automated tooling read your docs and changelogs. An AI coding assistant that encounters a deprecated function needs an unambiguous replacement to suggest. A human reading a changelog needs a path forward, not just a warning sign. "This is deprecated" without a recommendation just spreads uncertainty — it tells everyone there's a problem but gives no solution.

## What good looks like

Bad:

> The `getProfile()` method is going to be deprecated on 2027-03-01.

Good:

> The `getProfile()` method is **deprecated**. It will be **removed on 2027-03-01**. Use `getProfileAsync()` instead, which returns the same data with Promise support.


## Say what you mean

Words shape how people — and increasingly, agents — respond to your announcements. Reserve "deprecated" for the moment you actually pull the trigger. Call the future date what it is: a discontinue or sunset date. And never deprecate something without pointing to its successor. Clear language makes migration plans obvious and keeps your ecosystem moving forward instead of stuck in limbo.
