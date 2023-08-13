---
sidebar_position: 4
---

# Userscripts
Userscripts allow you to inject JavaScript into specific pages of the Scratch website. Here's an example of what a userscript looks like before you add any functions:
```js
export default async function ({ feature, console }) {

}
```
Both `feature` and `console` are specific to the feature the userscript belongs to. You can read more about `feature` in the API reference documentation.

`console` allows you to `console.log()`, `console.warn()`, and `console.error()` with specific information for your feature.