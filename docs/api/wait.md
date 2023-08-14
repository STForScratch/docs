---
sidebar_position: 9
---

# waitForElement(s)
This is a very, very helpful API that many features use in many different ways. It includes 2 different API's. Both allow you to wait for at least one element that matches a class name.

Not all elements are loaded at the same time, meaning features can break if they try selecting elements that don't exist. This API allows features to wait for elements to exist before continuing.

## ScratchTools.waitForElement
This API returns a promise. Here's an example:
```js
let element = await ScratchTools.waitForElement("form.sort-mode")
// Once the element matching the selector exists, it continues. element is now set to the new element that was found.
```
It only finds one element that matches the selector.

## ScratchTools.waitForElements
This API requires a selector and a callback, and returns every new element that matches the selector. Here's an example:
```js
let wait = ScratchTools.waitForElements("div.thumbnail.project", function(element) {
    // Every time a new element matching this selector is created, the callback is run.
})

setTimeout(function() {
    // You can even remove it! New elements matching the selector will no longer run the callback.
    wait.remove()
    // Rarely is there a reason to remove it, but it's here if needed.
}, 1000)
```