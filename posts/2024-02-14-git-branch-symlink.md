---
slug: 'git-branch-symlink'
title: 'Git Branch Symlink'
date: '2022-08-07T23:51:00.000Z'
ogImage:
  src: '/images/blog/simpsons-any-key.jpg'
  width: 710
  height: 360
---

Most git repos I work with use `main` as the default branch name. So I get in the habbit of running `git checkout main`. However, there are a few I regularly work with that don't use `main`, which is fine. But old habbits die hard. This leads to a confusing error message:

```sh
$ git checkout main
error: pathspec 'main' did not match any file(s) known to git
```

The good news is, git has a feature that lets you symlink a branch (aka a ref). For example, if you're working in a repo where the main branch is called `canary`, you can do the following:

```sh
$ git symbolic-ref refs/heads/main refs/heads/canary
$ git symbolic-ref refs/remotes/origin/main refs/remotes/origin/canary
```

Now you won't get the error and attempting to checkout main will work as you expect:

```
$ git checkout main
Switched to branch 'main'
```

Is there anything git can't do? 😄
