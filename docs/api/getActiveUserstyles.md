---
sidebar_position: 6
---

# feature.getActiveUserstyles
This function returns all the active userstyles. Userstyles are loaded before the rest of the userscripts. Here's an example of how to use the API:
```js
export default async function ({ feature, console }) {
    let userstyles = feature.getActiveUserstyles()
    // You now have the active userstyles
}
```
Here's an example response:
```json
[
    {
        "element": link,
        "file": "/style.css",
        "fullPath": "chrome-extension://jjnpbalpllpfdpgplpbcbadkgdmleopm/features/isonline/style.css"
    }
]
```
It returns the `link` element for the stylesheet, as well as the path relative to the feature folder and the full path.