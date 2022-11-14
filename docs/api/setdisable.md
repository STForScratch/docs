---
sidebar_position: 3
---

# setDisable
For dynamic features, it's important that they have the ability to clean up the changes that they've made to a page. [Check this out](https://docs.scratchtools.app/docs/contributing/building-a-feature#dynamic-boolean) for more information on dynamic features.

`ScratchTools.setDisable` is a function that sets the function that will run when the feature is disabled. The function runs on every ScratchTools page. Here's how to use it:
```
ScratchTools.setDisable("Name of the Feature's File Without the '.js'", function() {
    // code for removing the feature's changes to the page go here
})
```
The code inside should undo all changes that the feature has made to the page. This includes elements or CSS that the feature has added. It's very important to make sure that the function leaves no trace of the feature behind.
