---
sidebar_position: 2
---

# feature.traps

The `feature.traps` API allows features to access important Scratch API's in the editor.

## feature.traps.vm

This API allows features to access the virtual machine in the editor. Scratch's virtual machine manages running projects, and the API is also accessible from the GUI API.

### Features using the API

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
