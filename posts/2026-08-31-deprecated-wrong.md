---
slug: 'deprecated-wrong'
title: 'You''re probably using "deprecated" wrong'
date: '2026-08-31T09:30:00.000Z'
ogImage:
  src: '/images/blog/drake-old-legacy-new-hotness.jpg'
  width: 1408
  height: 768
---

If you've ever said "we will deprecate feature _X_ on date _Y_" you are likely wrong.

What you probably mean is "we will **REMOVE** feature _X_ on date _Y_".

[Deprecation](https://en.wikipedia.org/wiki/Deprecation) is discouragement of new or continued usage. That's it. I often see deprecation confused with removal. That's wrong.

Software or APIs can remain deprecated for a long time, even forever. The important thing is the deprecation should also come with a recommended alternative.

## Contradiction

Deprecation is formally telling the world: "this still works for now, but we recommend you stop building new things with it." That state begins the instant you publish the announcement.

So "going to be deprecated" is a contradiction — it either is deprecated or it isn't. There is no in-between state where an API is "going to be deprecated."

## Dates

The date in the announcement is likely the **discontinue date**, sometimes called a [sunset](https://en.wikipedia.org/wiki/Sunset_(computing)) or [end-of-life](https://en.wikipedia.org/wiki/Software_release_life_cycle#End-of-life) or simply **removal**. This is the day the API stops working, gets removed, or starts returning errors.

If your API lives in a library published to a registry like npm, this would be the date you publish the [semver major](https://semver.org) release (since public API removal is a breaking change).

These are two distinct events on a timeline:

1. **Deprecation** — the announcement discouraging use. It still works but prints a warning.
2. **Discontinue** — the date the API is removed or stops working.

Collapsing them into one "deprecation date" hides the most important information: how long do I have? The gap between those two dates is the migration window, and that's exactly what consumers need to plan around.

If you deprecate an API, your job is only half done unless you also tell consumers what to use instead. A good deprecation announcement answers three questions:

1. **What** is deprecated?
2. **When** will it be discontinued?
3. **What should I use instead?**

The recommended alternative matters more than ever now that agents and automated tooling read your docs and changelogs. An agent that encounters a deprecated function needs an unambiguous replacement.

The removal date actually isn't as important as you might think. If you have a new API that is designed to replace a legacy API, today is probably the day to deprecate, even if you don't have a removal date. Let consumers know early so they have time to migrate.

No one will be upset if you deprecate early and wait a long time until removal. However, you'll surely get upset users if the time between deprecation and removal is too quick.

Today is the day to deprecate, what are you waiting for?

## Example

Bad:

```js
/**
 * Going to be deprecated on 2027-03-01.
 */
function getProfile() {}
```

Good:

```js
/**
 * @deprecated Use `getAccount()` instead, which returns
 * the same data with Promise support. The `getProfile()`
 * method will be removed in v7.0.0 on 2027-03-01.
 */
function getProfile() {}
```

## Conclusion

Words shape how humans (and increasingly, agents) respond to your announcements. Use "deprecated" for the moment you publicly announce the decision. Call the future date what it is: a discontinue or sunset date or removal date. And this announcement MUST point to its successor. Link to this blog post if you need to convince your coworkers.
