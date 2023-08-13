# Adding to the `features.json` file
Once you have your folder for the feature, you can add the feature to the settings page in the `/features/features.json` file. At the top of the array object in the file, add this:
```json
{
	"version": 2,
	"id": "name of the folder that you made for your feature",
    "versionAdded": "the current version"
},
```
Once you do that, you can open up the settings page and the feature should appear at the top.

:::info

Scripts and styles are cached when enabled. If you update the userscripts or userstyles in the `data.json` file while the feature is enabled, make sure to disable and reenable the feature from the settings page to see changes to the feature on the Scratch website.

:::