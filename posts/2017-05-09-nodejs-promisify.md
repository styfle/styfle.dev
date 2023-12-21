---
slug: 'nodejs-promisify'
title: 'Promises in Node.js 8.x Core'
date: '2017-05-09T09:30:00.000Z'
---

Promises are well-known in the JavaScript community since they landed in Chrome 32 (Jan 2014) and in Node.js 0.12 (Feb 2015). They were formally introduced as part of the ES6 (ES2015) spec and are even more important in 2017 due to the async/await primitives that landed in Chrome 55 (Dec 2016) and Node.js 7 (Feb 2017).

Ok so you already knew all that history because you’re a young, hip, state-of-the-art, JavaScript developer who writes hand-crafted, artisan-made code aged to perfection. [Big whoop](https://www.youtube.com/watch?v=oJimiVFCjJ0), wanna fight about it?

But did you know that Node.js 8 will have a Promise API shipped in core? No way? Too good to be true? Well yes, I may have fibbed a bit.

Node.js 8 will have a *utility* to “promisify” any core API. This is just as good and will [keep the Node.js core small](https://medium.com/the-node-js-collection/keeping-the-node-js-core-small-137f83d18152).

### How does it work?

I’ll give you two easy steps: Require and Wrap.

1. Require `const promisify = require('util').promisify;`
2. Wrap `const stat = promisify(require('fs').stat);`

Ok so now you’re saying this is exactly what *bluebird* does because you’re a savvy, hipster code-monkey who started using Promises before they were cool.

You would be correct except that you’re missing how important this is! This means user-land dependencies are no longer needed to write async/await! Hurray! See the following code example.

### Get On With It!

Here is is a simple example that updates an existing file or creates the file if it does not exist.

```js
const fs = require('fs');

function exists(f, callback) {
    fs.stat(f, (err) => {
        callback(err ? false : true);
    });
}

function main() {
    const filename = './example.txt';
    const timestamp = new Date().toISOString();

    exists(filename, (fileExists) => {
        if (fileExists) {
            fs.appendFile(filename, `Updated file on ${timestamp}\n`, (err) => {
                if (err) {
                    console.err('Failed to update file');
                } else {
                    console.log('Successfully updated file');
                }
            });
        } else {
            fs.writeFile(filename, `Created file on ${timestamp}\n`, (err) => {
                if (err) {
                    console.err('Failed to create file');
                } else {
                    console.log('Successfully created file');
                }
            });
        }
    });
}

main();
```

Some say this is callback hell, but we only went a couple layers deep so it’s really more like callback purgatory. Now let’s see how it looks with promisify!

```js
const promisify = require('util').promisify;
const fs = require('fs');
const stat = promisify(fs.stat);
const writeFile = promisify(fs.writeFile);
const appendFile = promisify(fs.appendFile);

async function exists(f) {
    try {
        const stats = await stat(f);
        return true;
    } catch (e) {
        return false;
    }
}

async function main() {
    const filename = './example.txt';
    const timestamp = new Date().toISOString();
    const fileExists = await exists(filename);

    if (fileExists) {
        try {
            await appendFile(filename, `Updated file on ${timestamp}\n`);
            console.log('Successfully updated file');
        } catch(e) {
            console.err('Failed to update file');
        }
    } else {
        try {
            await writeFile(filename, `Created file on ${timestamp}\n`);
            console.log('Successfully created file');
        } catch (e) {
            console.err('Failed to create file');
        }
    }
}

main();
```

This code is asynchronous but there are no callbacks! The use if/else and try/catch is pretty intuitive and looks like synchronous code.

Now there is a little bit of boilerplate in order to promisify each function. So how about a helper function?

```js
function requirePromise(modName, fnName) {
    return require('util').promisify(require(modName)[fnName]);
}

const stat = requirePromise('fs', 'stat');
const writeFile = requirePromise('fs', 'writeFile');
const appendFile = requirePromise('fs', 'appendFile');
```

Not too shabby! Now it’s your turn to see what kind of async code you can cook up with Node.js 8!