---
sidebar_position: 1
---

# Storage
`ScratchTools.Storage` contains all the settings options for ScratchTools. For example, the font selected for Custom Website Font. It can be accessed by any feature running in the main world. It also updates dynamically, meaning changes saved in the settings will also update all open pages. All keys in this API are available to all features, so options for one feature can be viewed by all other features.

There is no other interaction with `ScratchTools.Storage`. Settings can only be set by the user from the settings page (unless using the Chrome API from an isolated world). This will likely change in the future, although is not the main focus of the storage API.
