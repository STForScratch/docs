---
sidebar_position: 2
---

# Building a Feature
It's simple and easy to contribute to ScratchTools. Most people, when contributing in code, build features. This way, ScratchTools users can have even more amazing additions to the Scratch website. Here's how to build your own feature and add it to ScratchTools.
## What Makes a Feature, a Feature?
A ScratchTools feature is a special tool that can be easily enabled/disabled from the ScratchTools settings. It makes Scratch even better, and users can use the feature to create Scratch projects or interact with the Scratch website.
## How to Make a Feature
### 1. Download ScratchTools from GitHub
Start by [Downloading and installing the source code from GitHub](https://docs.scratchtools.app/docs/beta). This will make modifying the code and testing it much easier.
### 2. Add Your Feature's File
In the `/features/` folder of the source code, create a new file. The file extension should be `.js` (this is a Javascript file). Make sure the name of the file is relevant to the feature that you're making, and that it doesn't exist yet. Put all of your code for the feature there. If a person has your feature enabled, this will run. If you want to access special parts of Scratch, such as the editor API's or the user info, you can use the [ScratchTools API](https://docs.scratchtools.app/docs/category/api). If you don't know how to access a page's contents and change them using Javascript, you can use this super simple and easy [tutorial](https://www.javascripttutorial.net/javascript-dom/) that many of our own developers used.
### 3. Add Your Feature's Info
In the `/features/features.json` file, you're going to add the information for your feature. Directly below the very first "\[" at the very top, add the following, customized to represent your own feature:
```
{
    "title": "Title of Your Feature",
    "description": "Description of Your Feature",
    "credits": ["Your Username"],
    "urls": [
      "Link to Your Profile"
    ],
    "file": "Name of Your Feature's File Without the '.js'",
    "type": ["'Editor' or 'Website', Depending on What Your Feature is For"],
    "tags": ["New"]
},
 ```
## How to Contribute Your Feature
### 1. Fork the Repository
Start by [forking the official ScratchTools repository](https://github.com/STForScratch/ScratchTools/fork). This is where all the code is, and you will be making changes in your fork. Please make sure to name it something appropriate and relevant.
### 2. Add Your Feature
Follow steps 2-3 under [How to Make a Feature](https://docs.scratchtools.app/docs/contributing/building-a-feature#how-to-make-a-feature). It's a good idea to test out your changes as well.
### 3. Open a Pull Request
Go back to compare your fork with [the main repository](https://github.com/STForScratch/ScratchTools/compare) and open a pull request, comparing across forks. Make sure that the base repository is the original ScratchTools, and the one you're comparing to is your fork. Then, open a pull request. Make sure that your pull request accurately describes your changes, that way our developers can easily test it, and eventually merge it.
## Additional Feature Parameters
There are some additional parameters that you can add to your feature's description, if applicable.
:::caution

When dealing with feature descriptions and information, make sure that it stays in the correct format.

:::
### `dynamic` (boolean)
"Dynamic" features are features that can be enabled and disabled smoothly, without the user having to reload the page. That means that the feature can clean up after itself when it gets the signal to. In the feature description, `dynamic` can either be `true` or `false`. The default is `false`. If your feature is dynamic, then somewhere in your feature's code, there has to be the disable function. It looks like this:
```
ScratchTools.setDisable("Name of the Feature's File Without the '.js'", function() {
    // code for removing the feature's changes to the page go here
})
```
The code inside should undo all changes that the feature has made to the page. This includes elements or CSS that the feature has added.
### `options` (object)
If your feature needs a user input from the settings page (such as the Custom Website Font) feature, then this will allow you to set the options/settings that the user should add. You can have an infinite amount, although they do display on the settings page, and the feature may not be accepted if it has too many. It currently only supports text input, but soon will accept more. This parameter is an array, so you can use it like this:
```
...
"options":["First Name", "Last Name", "Favorite Animal"]
...
```
### `warning` (string)
If your feature has something that users should know about (such as recent changes to user interface or possible mistakes users might make) then you should add a warning. The warning is a simple string that will display right next to the feature when on the settings page.
### `world` (string)
In ScratchTools, there are two worlds where scripts can be run. There's the `MAIN` world, and the `ISOLATED` world. The `MAIN` world has access to many API's, including the ScratchTools API. The `ISOLATED` world has access to the Chrome API, such as storage or tabs. `world` defaults to `MAIN`. We strongly advise that you stick to the `MAIN` world, because many features of the Chrome API already exist in the ScratchTools API.
