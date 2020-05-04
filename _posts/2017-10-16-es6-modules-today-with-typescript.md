---
slug: 'es6-modules-today-with-typescript'
title: 'ES6 Modules Today With TypeScript'
date: '2017-10-16T09:30:00.000Z'
---

Today, in 2017, many evergreen browsers support ES6 Modules out of the box. Some browsers have it hidden behind a flag, including Node.js. But is it possible to support old and new environments with the same npm package? Yes!

> **Editor's Note**: ES6 Modules are sometimes referred to as ES2015 Modules, or ESM, or `module` scripts, or sometimes even by the extension `.mjs` pronounced "Michael Jackson Scripts". We are all talking about the same thing so don't get confused if you hear different terms.

I won't go over the merits of using ES6 Modules or why TypeScript is awesome because there have been many blog posts describing these at length. Instead, I will focus on publishing a package to npm that is written in TypeScript but deployed as `.mjs` (ESM) and `.js` (CommonJS) so any consumer can use your package!

### Getting Started

The first step is to setup your `tsconfig.json` file so that TypeScript will use the latest and greatest JavaScript features like so:

```json
{
    "compilerOptions": {
        "module": "es2015",
        "target": "ES2017",
        "rootDir": "src",
        "outDir": "dist",
        "sourceMap": false,
        "strict": true
    }
}
```

Obviously, we want modules to be `es2015` because hey, its in the title of this article so we have to address it at some point! Let's target `es2017` so we can use `async` and `await` keywords like a JS Ninja. You can name your `rootDir` and `outDir` to whatever you want, but its a bit of a convention to use `dist` for output in JS Land. Source Maps are optional but I like to turn them off until I need them. Strict Mode is also optional but it's easier to start strict and get a little loosey goosey if you need too later. I highly recommend enabling it since it is disabled by default.

### Wiring It Up

Now we can discuss the `package.json` file. Here's an example for a package called [copee][GitHub]:

```json
{
    "name": "copee",
    "version": "1.0.0",
    "description": "Copy text from browser to clipboard...natively!",
    "repository": "styfle/copee",
    "files": [ "dist" ],
    "main": "dist/copee",
    "types": "dist/copee.d.ts",
    "scripts": {
        "mjs": "tsc -d && mv dist/copee.js dist/copee.mjs",
        "cjs": "tsc -m commonjs",
        "build": "npm run mjs && npm run cjs"
    },
    "devDependencies": {
        "typescript": "^2.5.3"
    }
}
```

The first four lines define the package `name`, `version`, `description`, and GitHub `repository` which are self explainatory.

Next, we define `files` which we simply define as a single folder, `dist`. These are the files that will be published to npm.

The entry point into your package is defined as `main` and this is where the magic happens. Notice there is no file extension (such as `.js`) as one might expect. This will allow Node to pick the file based on the way the consumer is importing your package--either legacy CJS or the new ESM.

Next is `types` which is necessary for consumers who want to import via TypeScript. If you're writing your package in TypeScript, you should most definitely include `types` for your fellow TS users to get type saftey! Seriously, it's just the right thing to do.

Now comes the fun part: `scripts`. These are your build steps which can be run via `npm run thenameofthescriptgoeshere`. The first build step `mjs` uses the TypeScript Compiler (`tsc`) to build our code using the `tsconfig.json` file we defined earlier, plus a `-d` flag which emits our `.d.ts` type definitions. Also note the `mv` command which moves (or rather renames) the output file from `.js` to `.mjs`. This is our ESM output.

Our next script, `cjs` uses the TypeScript Compiler (`tsc`) to build the same source code but emit the output as a CommonJS module. This is the module system for Node.js and is understood by `browserify`, `webpack`, etc.

Lastly, we have `devDependencies` which are your build tools. In this case, all we need is `typescript` which includes the `tsc` command used above.

### Node Usage

I'm going to show you how to write a consumer that imports the package above. If you already use Node regularly, jump to the next section for ESM usage.

First, install the [copee][NPM] package:

```sh
npm install --save copee
```

Then, create a `index.js` file with the following:

```sh
const { toClipboard } = require('copee');
console.log('CJS: We found a ', typeof toClipboard);
```

The new program can be executed like so:

```sh
node index.js
```

### Node ESM Usage

I'm going to show you how to write a consumer that imports the [copee][NPM] package above.

After installing [copee][NPM], create a `index.mjs` file. You must use the Michael Jackson Script extension (mjs).

```js
import { toClipboard } from 'copee';
console.log('ESM: We found a ', typeof toClipboard);
```

The new program can be executed like so:

```sh
node --experimental-modules index.mjs
```

### Browser ESM Usage

Node usage isn't that spectacular because there have been modules since its inception, but the beauty of ESM is that the same code executing in a Node module will run unchanged in a browser! Yes, it's true! Feast your eyes on this elegant code snippet below:

```html
<script type="module">
    import { toClipboard } from 'https://cdn.jsdelivr.net/npm/copee/dist/copee.mjs';

    document.getElementById('btn').addEventListener('click', () => {
        const success = toClipboard('Wow, "copee" works via ES Modules!');
        if (success) {
            // it worked, check your clipboard!
        }
    });
</script>
```

We have a new script type for `module` and we are using [jsDelivr][jsDelivr] to automatically host our code on a CDN. This makes it easy to write a single import line and use the [copee][NPM] package in browsers all over the world!

### Legacy Browsers

What about legacy browsers, you say? Not everyone supports ESM? Well this can be solved by bundling as UMD with `rollup`. After installing `rollup`, add this to the `scripts` section of your `package.json` file.

```json
{
    "umd": "rollup -i dist/copee.mjs -o dist/copee.umd.js -f umd -n copee"
}
```


You can include both ESM and UMD builds on the same page without conflicts. See the snippet below:

```html
<script nomodule src="https://cdn.jsdelivr.net/npm/copee/dist/copee.umd.js"></script>
<script type="module">
    import { toClipboard } from 'https://cdn.jsdelivr.net/npm/copee/dist/copee.mjs';
</script>
```

By using the `nomodule` attribute, you are telling new browsers to ignore the UMD script. By using `type=module` you are telling old browsers to ignore ESM. Now everyone wins!

You can see a working demo of this solution on the [Demo][Demo] page.

Also, please checkout the [GitHub][GitHub] repo for more details and of course, the working source code!

---

See something you like? Or see something wrong? Then add a comment below:

- [Medium Comments](https://medium.com/@styfle/22969cd360f0/)
- [Twitter Comments](https://twitter.com/styfle/status/919926605614583809)
- [Facebook Comments](https://www.facebook.com/ceriouslycom/posts/1702044993150660)

[NPM]: https://www.npmjs.com/package/copee
[GitHub]: https://github.com/styfle/copee
[Demo]: https://copee.ceriously.com
[jsDelivr]: https://www.jsdelivr.com
