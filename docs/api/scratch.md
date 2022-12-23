---
sidebar_position: 7
---

# Scratch
There are multiple API's wrapped into `ScratchTools.Scratch`. Here they are:
### `ScratchTools.Scratch.blockly`
Easily access the Blockly API. The Blockly API controls blocks in the Scratch editor, and everything you do with them. It controls deletion, movement, and adding blocks.
### `ScratchTools.Scratch.vm`
The virtual machine controls the running of the project. It controls the project data and the runtime while you view the project. Using the vm, you can pause the project, change the volume, the framerate, and much more - as well as view what scripts are running. It also controls multiple editor features, such as what sprite you're currently editing.
### `ScratchTools.Scratch.scratchGui`
This function accesses the GUI for Scratch, which controls many aspects of the editor, including the virtual machine. It also controls other project information, such as the title of the project and the project data.
### `ScratchTools.Scratch.scratchSound`
This function accesses the Scratch sound editor. It can view all the sound information, and control the audio player. It is used for features such as Pause Audio.
### `ScratchTools.Scratch.scratchPaint`
This function accesses the Scratch paint editor. It can access information about and change different elements on the canvas - both for vector and for bitmap. It is used for features such as Opacity in Costume Editor.
### `ScratchTools.Scratch.waitForContextMenu`
This function waits for block context menus in the editor. Its purpose is to allow multiple features to access the context menus of one block at the same time. Here's how you use it:
```
ScratchTools.Scratch.waitForContextMenu({ block: "ID of block to select", id: "Collapse Blocks", callback: myFunction })

function myFunction(contextMenu) {
  const collapse = { enabled: true, text: "Text for Context Menu Option" }
  collapse.callback = function() {
    console.log("This option was clicked")
  }
  contextMenu.push(collapse)
}
```
:::caution

To be clear, `waitForContextMenu` does **not** immediately add the context menu option - it simply waits for a context menu to appear so that you can add it yourself, using a simple function shown in the example above.

:::
