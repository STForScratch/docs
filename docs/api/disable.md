---
sidebar_position: 4
---

# disable
This function is mostly used by the settings scripts when they need to disable a feature on a page. If a feature is dynamic, then the function will remove the feature from the page that it is run on. If the page is reloaded and the feature is still enabled in the settings, it will reappear. Here's how to use it:
```
ScratchTools.disable("File Name for Feature Without the '.js'")
```
This should usually not be used, unless a feature is purposefully made to interfere with another, or override it. To avoid a race condition bug, multiple features should never try to disable each other.
