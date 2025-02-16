# enchainjs
Allows you to chain together functions (or links).

Intended for making modules to allow users to customise how something is processed by the module by adding their own links or removing the default ones.

## Installation

In the command line
```
npm i enchainjs
```
or
```
npm install enchainjs
```

## Making a chain

```js
const Chain = require("enchainjs") // Require the Chain class

const chain = new Chain([
    (data, store) => {
        store.before = data // store lets you store information between links
        return data.toUpperCase()
    },
    (data, store) => {
        return data.replace("BAD WORD", "****")
    },
    (data, store) => {
        return `"${store.before}" -> "${data}"`
    }
])

chain.run("this is going to be transformed to stars: bad word") // Chain.run() returns a promise
    .then(console.log) // Outputs "this is going to be transformed to stars: bad word" -> "THIS IS GOING TO BE TRANSFORMED TO STARS: ****"
    .catch(console.error) // Logs any errors that happens in the chain
```