---
sidebar_position: 2
---

# feature.traps

The `feature.traps` API allows features to access important Scratch API's in the editor.

:::tip

When dealing with new traps API's, we highly recommend exposing the feature variable. You can do so by finding an editor feature that uses modules and adding `window.feature = feature` to it.

:::

## feature.traps.vm

This API allows features to access the virtual machine in the editor. Scratch's virtual machine manages running projects, and the API is also accessible from the GUI API.

### Features using the API
:::caution

Many or all of the features listed use the deprecated API for reaching the virtual machine. Do not reference their code when using the API for reasons other than compatability.

:::
<table>
<tr><td><b>Feature ID</b></td><td><b>Use case</b></td></tr>
<tr>
<td>start-stop-hotkeys</td>
<td>Start and stop projects.</td>
</tr>
<tr>
<td>sprite-clones</td>
<td>Get the current sprite and its clones.</td>
</tr>
<tr>
<td>project-timer</td>
<td>Detect a project starting/stopping and get the runtime.</td>
</tr>
<tr>
<td>list-sprites</td>
<td>Get the current sprite's block count and coordinates.</td>
</tr>
<tr>
<td>last-key-pressed</td>
<td>See when the project detects keys pressed.</td>
</tr>
<tr>
<td>delete-sprites</td>
<td>Get all sprites and delete them.</td>
</tr>
<tr>
<td>clone-counter</td>
<td>Get the total number of clones.</td>
</tr>
</table>

_Last updated: ScratchTools v3.1.1_

## feature.traps.blockly

The Blockly API controls the blocks workspace in the editor, and the blocks within the workspace itself.

### Features using the API
:::caution

Many or all of the features listed use the deprecated API for reaching Blockly. Do not reference their code when using the API for reasons other than compatability.

:::
<table>
<tr><td><b>Feature ID</b></td><td><b>Use case</b></td></tr>
<tr>
<td>add-last-option</td>
<td>Get blocks to add context menu option.</td>
</tr>
<tr>
<td>block-log</td>
<td>Get recent Blockly events.</td>
</tr>
<tr>
<td>collapse-blocks</td>
<td>Get blocks to add context menu option.</td>
</tr>
<tr>
<td>colored-comments</td>
<td>Get editor comments and their parent blocks to set comment color.</td>
</tr>
</table>

_Last updated: ScratchTools v3.1.1_

## feature.traps.gui

This is a function that returns the Scratch editor GUI, which hosts the virtual machine, important project data, and more.

### Features using the API
:::caution

Many or all of the features listed use the deprecated API for reaching the GUI. Do not reference their code when using the API for reasons other than compatability.

:::
<table>
<tr><td><b>Feature ID</b></td><td><b>Use case</b></td></tr>
<tr>
<td>move-project-title-input</td>
<td>Set the title input to the project's title.</td>
</tr>
<tr>
<td>start-stop-hotkeys</td>
<td>Check whether or not the project is running.</td>
</tr>
<tr>
<td>slash-to-search</td>
<td>Check whether or not the project is running.</td>
</tr>
<tr>
<td>unlisted-projects</td>
<td>Get the project ID.</td>
</tr>
</table>

_Last updated: ScratchTools v3.1.1_

## feature.traps.paint

This is a function that returns the Scratch paint editor's API. It contains important information such as the selected shapes, opened modals, and more.

### Features using the API
:::caution

Many or all of the features listed use the deprecated API for reaching the paint editor API. Do not reference their code when using the API for reasons other than compatability.

:::
<table>
<tr><td><b>Feature ID</b></td><td><b>Use case</b></td></tr>
<tr>
<td>special-editor-fonts</td>
<td>Set the font of the selected item.</td>
</tr>
<tr>
<td>shared-clipboard</td>
<td>Set and get the current clipboard data.</td>
</tr>
</table>

_Last updated: ScratchTools v3.1.1_

## feature.traps.sound

This is a function that returns the Scratch sound editor's API. It contains important information and the ability to edit sounds.

### Features using the API
:::caution

Many or all of the features listed use the deprecated API for reaching the sound editor API. Do not reference their code when using the API for reasons other than compatability.

:::
<table>
<tr><td><b>Feature ID</b></td><td><b>Use case</b></td></tr>
<tr>
<td>pause-audio</td>
<td>Set the audio trimming and get the current time.</td>
</tr>
<tr>
<td>echo-effect</td>
<td>Add the echo effect to the current sound.</td>
</tr>
</table>

_Last updated: ScratchTools v3.1.1_