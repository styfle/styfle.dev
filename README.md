# [styfle.dev](https://styfle.dev)

This is the source code for my personal website, built with [Next.js](https://nextjs.org) and deployed to [Vercel](http://vercel.com).

Each time I `git push`, I get a new Preview URL and when I merge to `master`, my code deploys to production automatically using the [git integration](https://vercel.com/github).

This website utilizes a new [SSG feature in Next.js 9.3](https://nextjs.org/blog/next-9-3#next-gen-static-site-generation-ssg-support) to query GitHub's API at build time and dynamically generate static pages for each of my GitHub repos as well as each of my Blog posts.

Shoutout to [@Timer](https://github.com/Timer) for creating a good starter [blog](https://github.com/Timer/blog) using the same SSG feature.
