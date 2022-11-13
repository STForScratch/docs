---
sidebar_position: 2
---

# Building a Feature
It's simple and easy to contribute to ScratchTools. Most people, when contributing in code, build features. This way, ScratchTools users can have even more amazing additions to the Scratch website. Here's how to build your own feature and add it to ScratchTools.
## What Makes a Feature, a Feature?
A ScratchTools feature is a special tool that can be easily enabled/disabled from the ScratchTools settings. It makes Scratch even better, and users can use the feature to create Scratch projects or interact with the Scratch website.
## How to Make a Feature
### Fork the Repository
Start by [forking the official ScratchTools repository](https://github.com/STForScratch/ScratchTools/fork). This is where all the code is, and you will be making changes in your fork. Please make sure to name it something appropriate and relevant.
### Add Your Feature's File
In the `/features/` folder of your fork, create a new file. The file extension should be `.js` (this is a Javascript file). Make sure the name of the file is relevant to the feature that you're making, and that it doesn't exist yet. Put all of your code for the feature there. If a person has your feature enabled, this will run. If you want to access special parts of Scratch, such as the editor API's or the user info, you can use the [ScratchTools API](https://docs.scratchtools.app/docs/contributing/api). If you don't know how to access a page's contents and change them using Javascript, you can use this super simple and easy [tutorial](https://www.javascripttutorial.net/javascript-dom/) that many of our own developers used.
### Add Your Feature's Info
In the `/features/features.json` file of your fork, you're going to add the information for your feature. Directly below the very first "\[" at the very top, add the following, customized to represent your own feature:
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
### Open a Pull Request
Go back to compare your fork with [the main repository](https://github.com/STForScratch/ScratchTools/compare) and open a pull request, comparing across forks. Make sure that the base repository is the original ScratchTools, and the one you're comparing to is your fork. Then, open a pull request. Make sure that your pull request accurately describes your changes, that way our developers can easily test it, and eventually merge it.
