---
sidebar_position: 8
---

# cookies
The `ScratchTools.cookies` API controls the access to cookies on the Scratch website. It's a pretty simple API, but it can be really helpful at times. You can use it like this:
```
const theCookie = ScratchTools.cookies.get("Name of Cookie to Get Value of")
console.log(theCookie)
```
It will return a string.
