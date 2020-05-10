---
slug: 'website-redesign-3'
title: 'Website Redesign 3.0'
date: '2020-05-10T02:48:32.344Z'
---

It's been a few years, well [5 years](./website-redesign-2-0), since the last time I redesigned my website and roughly 2 years since my last blog post, excluding work related [posts](https://vercel.com/blog/social-og-image-cards-as-a-service). 

## History

A little history behind my personal website...

I purchased [ceriously.com](https://www.ceriously.com) in 2010 because owning a dot com was ["da bomb"](https://answers.yahoo.com/question/index?qid=20080104203608AAhuSDZ) as we used to say back then. I wanted a place to host personal projects and anyone who was cool owned their own domain. Maybe I would pick up blogging too. Who doesn't like to talk about themselves? 

I cobbled together some PHP pages and uploaded some `.jar` files via FTP because Java was a great way to distribute software back then (narrator: it is not). FTP was fine but then Git started becoming popular so I decided to setup SSH so I could `git push` to deploy my website.

For new projects, I found myself using GitHub instead of my personal website because it was much easier to manage source code as well as binary downloads (now called Releases). I started linking from my personal website to GitHub because all of the information was already there.

## Requirements

Before I could rewrite my website from scratch, I made a few goals:

1. Fast - perf matters, no one waits for a blog that takes several seconds to load
2. No PHP - embrace ~JavaScript~ TypeScript and React
3. GitHub - must fetch my projects from GitHub API as source of truth
4. Dark Mode - must support both Light Mode and Dark Mode based on system preference
5. Markdown - must be able to author blog posts with Markdown
6. Domain - must use a sweet gTLD like [.dev](https://get.dev)
7. Deploy - must use be hosted on GitHub and use `git push` to deploy

## Solution

I decided to use [Next.js](https://nextjs.org) because of a recent [SSG feature](https://nextjs.org/blog/next-9-3#next-gen-static-site-generation-ssg-support) that feels like SSR but it renders pages at build time. This allowed me to check off number 1 and 2 from the list because I could use TypeScript with React and ensure fast page loads because the generated pages would be static HTML. Next.js also hands [client-side transitions](https://nextjs.org/docs/api-reference/next/link) which avoids a complete reload when navigating between pages.

For number 3, I utilized Next.js to fetch my projects at build time from the [GitHub REST API](https://developer.github.com/v3/repos/#list-repositories-for-the-authenticated-user) using a personal access token. I didn't want to show private or archived repositories so those are filtered out in the query.

I implemented support for Dark Mode and Light Mode by using the CSS media query `prefers-color-scheme`. It looks something like this:

```html
<link href="dark.css" media="(prefers-color-scheme: dark)" rel="stylesheet"></link>
<link href="light.css" media="(prefers-color-scheme: light)" rel="stylesheet"></link>
```

The beauty here is that this media query respects the user's system preference so enabling [Appearance Auto](https://support.apple.com/en-us/HT208976) in macOS Catalina will use the light appearance during the day, and the dark appearance at night. No more burning your eyes out of their sockets.

In order to implement Markdown blog post authoring, I reached for [Marked](https://github.com/markedjs/marked), a project I help maintain that parses markdown and converts it to HTML. And, as you may have guessed, I used Next.js [dynamic route segments](https://nextjs.org/docs/routing/introduction#dynamic-route-segments) to dynamically generate a page for each blog post. Is there anything Next.js can't do?

The domain was easy. I actually purchased [styfle.dev](https://twitter.com/styfle/status/1101238620982308864) a year ago because `.dev` is the new hotness. [Vercel](https://vercel.com/domains) makes it really easy to purchase a domain and assign it to a project in seconds.

Which brings me to my last step, deployment. I set up [Vercel GitHub Integration](https://vercel.com/github) with a few clicks so that each time I `git push` to my [repository](https://github.com/styfle/styfle.dev), a new deployment is created. The best part here is that Vercel will deploy Pull Requests to a Preview URL and even take screenshots of the modified pages using the [Deploy Summary Integration](https://vercel.com/integrations/deploy-summary). For example, see [PR 13](https://github.com/styfle/styfle.dev/pull/13).

## Conclusion

Overall, I'm happy with the new design and productivity boost. Perhaps I'll start blogging again. If you want to see the source code for my website, you can find it on [GitHub](https://github.com/styfle/styfle.dev).
