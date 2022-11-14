---
sidebar_position: 5
---

# Session and Auth
There are two similar API's, but one is a function and the other is an object.
## Session
`ScratchTools.Session` is an asynchronous function that will return the information for the current signed-in user. It will include information on the user's profile, as well as important tokens. It is used by other API's as well, and will update if a user signs into another account in a different tab.
## Auth
`ScratchTools.Auth` is an object defined by `ScratchTools.Session()` on page load. It isn't defined immediately, since the session function is asynchronous. Unlike the session function, `ScratchTools.Auth` will not update when tokens change without a page reload.
