---
sidebar_position: 1
---

# feature.self

The `feature.self` API allows features to view their own data, settings, and more.

## feature.self.id

This can be used to view the extension ID for ScratchTools. Do not use this for determining the path to any extension files. You can use `ScratchTools.dir` to get the extension's path.

## feature.self.data

You can use this to get the data for the feature itself. Here's an example:

```js
export default async function ({ feature, console }) {
  // Log the title of the feature.
  console.log("The title of this feature is: " + feature.self.data.title);
}
```

This API corresponds to the `data.json` file

## feature.self.enabled

This is a very helpful API for loops and code after receiving fulfilled promises, when a feature could be disabled after page load and before a piece of code runs. Here's an example:

```js
export default async function ({ feature, console }) {
  // Creation of an element (example).
  let span = document.createElement("span");
  span.textContent = "This is an element";

  // Another API with documentation elsewhere.
  let container = await ScratchTools.waitForElement(".remix-button");

  // Check if feature is still enabled.
  if (feature.self.enabled) {
    container.appendChild(span);
  }
}
```

This API is only required for dynamic features.

## feature.self.hideOnDisable

This is another helpful API that allows you to hide elements whenever the feature is disabled, and then display them again when the feature is reenabled. Any previous style attributes (including display) set specifically to the element specified will be restored as well when the feature is reenabled.

```js
export default async function ({ feature, console }) {
  // Create an element.
  let span = document.createElement("span");
  span.textContent = "This is an element";
  span.style.display = "inline-block";

  feature.self.hideOnDisable(span);

  document.querySelector(".profile-details > .location").appendChild(span);

  // When the feature is disabled, span will be hidden from the page.
  // When it is reenabled, it will be displayed again, with the display attribute set to inline-block.
}
```

## feature.self.dir

This is the directory for the feature's folder. It's helpful in situations where you need to access files within the folder without using resources. Here's an example:

```js
export default async function ({ feature, console }) {
  // Get the path using the API, and then add the final name after.
  let path = feature.self.dir + "style.css";
}
```

## feature.self.getResource

This API can be used to get the paths to resources specified in the `data.json` file. Here's an example:

`data.json` file:

```json
"resources": [{ "name": "my-resource", "path": "/resource.svg" }],
```

`script.js` file:

```js
export default async function ({ feature, console }) {
  // Create element (example).
  let img = document.createElement("img");
  // Get resource path.
  img.src = feature.self.getResource("my-resource");
}
```