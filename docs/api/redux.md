---
sidebar_position: 7
---

# feature.redux
This API returns the state for the Scratch website. It only works on Scratch 3.0 pages, where React is used. It returns `null` on Scratch 2.0 pages. Here's an example:
```js
export default async function ({ feature, console }) {
    // Get the state.
    let state = feature.redux.getState()  
    // It returned important information about the current page, including the logged in user.
}
```
Similar information can be found on Scratch 2.0 pages using the `Scratch` variable.