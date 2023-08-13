---
sidebar_position: 2
---

# Feature JSON files

ScratchTools uses JSON files to describe how a feature works, what it does, and how it should display on the settings page next to the rest of the features. It's a very important file, and features don't work without them.

The file path always matches this: `/features/*/data.json`. It should be directly within the folder that matches your feature's ID, which is within the features folder. Here's what a sample `data.json` file looks like, taken from the "More News" feature (with some additional keys added):
```json
{
 "title": "More Scratch News",
 "description": "On the main page, scroll through the Scratch News section and load more results.",
 "credits": [
   { "username": "rgantzos", "url": "https://scratch.mit.edu/users/rgantzos/" }
 ],
 "type": ["Website"],
 "tags": ["New", "Featured"],
 "dynamic": true,
 "default": true,
 "resources": [
    { "name": "my-resource", "path": "/resource.svg" }
  ],
 "scripts": [{ "file": "script.js", "runOn": "/" }],
 "styles": [{ "file": "style.css", "runOn": "/" }]
}
```

### title
This one is pretty self-explanatory. It's the title that displays on the settings page for the feature. This does not have anything to do with how enabled features are stored, so you can change it without affecting users who have it enabled. Titles are put in [Title Case](https://www.thesaurus.com/e/grammar/title-case/).

*Example: Most of the Words Capitalized*

### description
This is the description of the feature. It displays next to the title on the settings page, and should accurately describe what the feature does.

### credits
This is an array object. It should have at least one credit, and describes who has contributed in a relatively major way to the feature. Each element within it should have a username and a URL. When making a pull request to ScratchTools, pull requests linked to suggestions in the [Discord server](https://discord.gg/rwAs5jDrTQ) will be commented on by the ScratchTools bot letting you know which Scratch user to credit.
### type
This helps the settings page separate different types of features in the search. There are 4 types:
- Website: a feature that affects a part of the Scratch website other than the editor or forums.
- Forums: a feature that affects the forums.
- Editor: a feature that affects the editor.
- Egg: an easter egg feature. Easter egg features don't show by default unless enabled. You need to use a secret code to display it on the settings page.

You can use more than one tag for features. For example, if a feature affects the profile page and the editor, then you would use both the Website tag and the Editor tag.
### dynamic
This key decides whether or not a feature can be dynamically disabled or enabled, without having to reload the page. If dynamic, any userstyles will be disabled on the page as well when the feature is disabled, and any callbacks to disable listeners will also be called.
### default
This decides whether or not the feature should be enabled by default when you install the extension for the first time. Very few features are enabled by default.
### resources
This is an array object. They are resources that your feature can access via userscripts and userstyles. You can use them to access images, videos, sounds, etc.

Each item contains a name, which is important to be able to access it from a userscript/userstyle. Each one also contains a path, relative to the feature's folder, minus the "/" at the end.

*Userstyles and userscripts are discussed in a separate section.*