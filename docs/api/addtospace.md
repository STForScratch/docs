---
sidebar_position: 9
---

# addToSpace
There are many spaces on the Scratch website that features commonly add elements to. This includes above the stage, in the navbar, and in the account dropdown. This API makes it extremely easy to quickly add elements to those places, using a series of already-known selectors.
## How to Use
```
ScratchTools.addToSpace({ element: myElement, space: "Name of Space", order: 0 })
```
The order is the place in which the element should be, compared to other elements added by ScratchTools and/or other browser extensions. It currently doesn't have an effect yet, but it is still required because it will soon.
## Places
Here are the places that it currently supports:
- "afterProjectPageButton" - after the project page button in the editor
- "beforeEditorMyStuffButton" - after the My Stuff link in the editor navbar
- "afterStopButton" - after the stop button above the stage
- "beforeSmallStageButton" - before the stage sizing section above the stage
- "afterCopyLinkButton" - after the Copy Link button below the project Notes & Credits
- "beforeSeeInsideButton" - before the See Inside button next to the title on project pages
- "afterMyStuffCreateButtons" - after the New Project and New Studios button on the My Stuff page
- "afterForumPreview" - after the preview button in the discussion forums
