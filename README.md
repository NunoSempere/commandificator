# Commandificator
A narrow tool which turns a list of functions into a command line prompt. For a more featureful solution, see [commander](https://www.npmjs.com/package/commander)

## Installation

```
$ npm install commandificator

```

## Example use

```js
// Inside index.js
import commandify from "commandify"

let echo = (x)=> console.log(x)
let echo0 = () => echo(0)
let echo1 = () => echo(1)
let echo2 = () => echo(2)
let echo3 = () => echo(3)
let echo4 = () => echo(4)

let functions = [echo0, echo1, echo2, echo3, echo4]
commandify(functions)
```

```
$ node index.js
$ node index.js 2
$ npm run start 2
```