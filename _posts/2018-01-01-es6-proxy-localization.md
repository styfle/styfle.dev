---
slug: 'es6-proxy-localization'
title: 'ES6 Proxy and Localization'
date: '2018-01-01T09:40:00.000Z'
---

Maybe you've heard of JavaScript Proxy and think, "Hey that's cool and such, but what should I use it for?" Don't worry, I thought this too until recently when I needed a catch-all solution. And BEHOLD, the indirect intermediary known only as "Proxy" arose from the ashes and set ablaze all Text Editors throughout the known universe.

In my use case, I wanted to pass back an object (more like a dictionary) that would contain key/value pairs for each localized string in the application. But the magic sauce here is that any missing string should return a See-No-Evil monkey emoji (🙈) because that means the developer mistyped a letter or maybe the string wasn't translated at all! The monkey will not judge you.

Let's look at some example JSON that is emitted when a good ol' chap from across the pond visits our application (someone using `en-GB`).

```json
{
  "color": "Colour",
  "elevator": "Lift",
  "pants": "Trousers"
}
```

At first, you might think that the [ES5 Getter][Getter] could solve our problem because you can override a property (such as `elevator`) and check if there is no value defined. But what about the keys you don't know about? You don't know what you don't know.

Enter the [Proxy][Proxy], where Bruce Lee plays a web developer determined to help capture the missing keys responsible for the death of his sister.

```js
    let obj = JSON.parse(json);
    let l10n = new Proxy(obj, {
      get(target, name) {
        if (typeof target[name] === 'undefined') {
          console.error(`Localized string is missing: ${name}`);
          return '🙈';
        }
        return target[name];
      }
    });
```

We call the localization object `l10n` because we're lazy and this abbreviation is commonly used according to [Wikipedia][WikiL10n] and other lazy devs. Ain't nobody got time for typing. Why am I writing this article anyway?

Now back to the topic of Proxy usage...let's talk about React.

React is great and you should use it because the internet told you so and that one blogger blogged about it on their weblog so don't challenge the blog. Embrace the blogosphere.

```js
    const SelectAColor = (props) => (
      <div>
      <label>{props.l10n.color}:</label>
      <select>
        {props.colors.map(c =>
          <option value={c}>
            {c}
          </option>)}
      </select>
      </div>
    );
```

Now that we have a React component, let's see how it would render for users from different countries.

![color-dropdown-localized](/img/color-dropdown-localized.png)

USA looks A-OK! Great Britain looks great! Mexico is ¡Ay, caramba! We forgot to translate into Spanish! The monkey does not lie but the monkey is forgiving.

The same would happen if you misspelled `props.l10n.color` for example `props.l10n.colr` in which case, the monkey would visit you again, shielding its eyes from your incompetence.

If you would like to see a demo, visit [CodeSandbox][CodeSandbox] to see the code in action and witness the magnificent monkey madness!

-----

- Comment on [Medium][Medium]
- Comment on [Twitter][Twitter]
- Comment on [Facebook][Facebook]
- Comment on [Hacker News][HackerNews]

[CodeSandbox]: https://codesandbox.io/s/48lknyyo47
[Proxy]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
[Getter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
[WikiL10n]: https://en.wikipedia.org/wiki/Internationalization_and_localization#Naming
[Medium]: https://medium.com/@styfle/es6-proxy-and-localization-c1269bbc0a26
[Twitter]: https://twitter.com/styfle/status/947932282777735169
[Facebook]: https://www.facebook.com/ceriouslycom/posts/1780110312010794
[HackerNews]: https://news.ycombinator.com/item?id=16047941