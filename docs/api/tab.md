---
sidebar_position: 5
---

# feature.tab
This API includes information about the current tab. It's a very simple API that will likely be expanded upon soon. You can adapt the API to any features you make, as changes to the API will likely be accepted.

## feature.tab.path
This returns to the current path of the Scratch website. Here's an example:
```js
export default async function ({ feature, console }) {
    console.log(feature.tab.path)
    // Logs "/users/rgantzos/" (example).
}
```

## feature.tab.scratch
This returns the page type as an integer. On Scratch 2.0 pages (such as profile pages, statistics page, and my stuff page) the value is `2`. On Scratch 3.0 pages (such as the editor, project pages, and homepage) it returns `3`.