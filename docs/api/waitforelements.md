---
sidebar_position: 2
---

# waitForElements
`ScratchTools.waitForElements` is a function with 4 parameters:
```
ScratchTools.waitForElements("Selector", function(element) {

}, "ID For Use (Make Your Own, Can Only Be Used Once)", false)
```
- The selector will select elements and return then in the function selected.
- The function will run with one parameter- the element found. It runs for each element found.
- The identification for the use of the API. It can only be used once per page, and should be specific to the actual action it is performing.
- The boolean that determines whether or not the function will return already existing elements, or start over. If `true`, then it won't return existing elements. If `false`, then it will.

This API is very important for finding elements that don't load immediately- many parts of the Scratch website does this. It's much simpler than `MutationObserver`, and it's also a good practice to use this API rather than build your own for your feature.
