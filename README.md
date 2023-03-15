# [styfle.dev](https://styfle.dev)

This is the source code for my personal website, built with [Next.js](https://nextjs.org) and deployed to [Vercel](http://vercel.com).

Each time I `git push`, I get a new Preview URL. When I merge a PR to the `main` branch, my code deploys to Production automatically using the [Git Integration](https://vercel.com/github).

The code utilizes the new App Router, introduced in [Next.js 13](https://nextjs.org/blog/next-13), to query GitHub's API at build time and dynamically generate static pages for each of my GitHub repos as well as each of my Blog posts.

