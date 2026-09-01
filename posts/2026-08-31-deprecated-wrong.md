---
slug: 'deprecated-wrong'
title: 'You might be using "deprecated" wrong'
date: '2026-08-31T09:30:00.000Z'
ogImage:
  src: '/images/blog/drake-old-legacy-new-hotness.jpg'
  width: 1408
  height: 768
---

When you say "we will deprecate _feature_ on _date_" you are likely wrong.

What you probably mean is "we will **REMOVE** _feature_ on _date_".

[Deprecation](https://en.wikipedia.org/wiki/Deprecation) is the discouragement of use. I often see deprecation confused with removal. That's wrong. Software or APIs can remain deprecated for a long time, even forever. The important thing is the deprecation should also come with a recommended alternative.

## Deprecation is not a countdown

To deprecate something is to formally tell the world: "this still works, but we recommend you stop building new things with it." That state begins the instant you publish the announcement. So "going to be deprecated" is a contradiction — it either is deprecated or it isn't. There is no in-between limbo where an API is "going to be deprecated."

## So what about the date?

The date in the announcement is the **discontinue date**, sometimes called a **sunset date** or **end of life** or simply a **removal date**. This is the day the API stops working, gets removed, or starts returning errors.

If your API lives in a library published to a registry like npm, this would be the date you publish the [semver major](https://semver.org) release.

These are two distinct events on a timeline:

1. **Deprecation** — announcement discouragement. It still works but maybe prints a warning.
2. **Discontinue** — the date the API is removed or stops working.

Collapsing them into one "deprecation date" hides the most important information: how long do I have? The gap between those two dates is the migration window, and that's exactly what consumers need to plan around.

If you deprecate an API, your job is only half done unless you also tell consumers what to use instead. A good deprecation announcement answers three questions:

- **What** is deprecated?
- **When** will it be discontinued?
- **What should I use instead?**

The last one matters more than ever now that agents and automated tooling read your docs and changelogs. An AI coding assistant that encounters a deprecated function needs an unambiguous replacement.

## What good looks like

Bad:

> The `getProfile()` method is going to be deprecated on 2027-03-01.

Good:

> The `getProfile()` method is **deprecated**. It will be **removed on 2027-03-01**. Use `getProfileAsync()` instead, which returns the same data with Promise support.


## Say what you mean

Words shape how humans (and increasingly, agents) respond to your announcements. Use "deprecated" for the moment you publicly announce the decision. Call the future date what it is: a discontinue or sunset date or removal date. And this announcement MUST point to its successor.
