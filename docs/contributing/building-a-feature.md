---
sidebar_position: 2
---

# Building a Feature
It's simple and easy to contribute to ScratchTools. Most people, when contributing in code, build features. This way, ScratchTools users can have even more amazing additions to the Scratch website. Here's how to build your own feature and add it to ScratchTools.
## What Makes a Feature, a Feature?
A ScratchTools feature is a special tool that can be easily enabled/disabled from the ScratchTools settings. It makes Scratch even better, and users can use the feature to create Scratch projects or interact with the Scratch website.
## How to Make a Feature
### 1. Fork the Repository
Start by [forking the official ScratchTools repository and installing it](https://docs.scratchtools.app/docs/beta). This is where all the code is, and you will be making changes in your fork. Please make sure to name it something appropriate and relevant.
### 2. Add Your Feature's Data
Now that you have your very own fork, you can create a new folder for your very own feature. Name it according to what it does. For example, if your feature changes the background color of the Scratch website, name it `background-color`.

Inside of the new folder, create a file called `data.json`. You'll store all important information here about what your feature does and such. Here's an example of the file:
```
{
	"title": "My New Feature",
	"description": "This feature does stuff.",
	"credits": [
		{ "username": "My Username", "url": "Link to my profile" }
	],
	"type": ["Either website or editor"]
}
```

There's a `.json` file inside of the `/features/` folder. It's called `features.json`. Go to the file, and add something to the top of the file, right after the first bracket. It should say this:
```
{
	"version": 2,
	"id": "name of the folder that you made for your feature"
},
```

### 3. Add the Code
Create a file with the code for your feature. It can either be a CSS file or a JS file, depending on what you're making. Make sure that the file is within the folder you made for your feature.

#### For JS Files
In the `data.json` file, add a new key to the bottom of the JSON:
`"scripts": ["name of .js file"]`

#### For CSS Files
In the `data.json` file, add a new key to the bottom of the JSON:
`"styles": ["name of .css file"]`

Now, just write your code. That's it!

### 4. Open a Pull Request
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
