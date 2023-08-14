---
sidebar_position: 4
---

# feature.settings
This API deals with the feature's settings and their values.

## feature.settings.get
This function allows you to get the value of a specific setting. Here's an example:
```js
export default async function ({ feature, console }) {
    // Get the setting value. hide-completely is the ID of the option.
    let value = feature.settings.get("hide-completely")
}
```
If the value is `undefined`, it's because the user has not set it.

## feature.settings.addEventListener
You can detect when a feature's settings change using listeners. Here's an example:
```js
export default async function ({ feature, console }) {
    // Add the listener.
    feature.settings.addEventListener("changed", function({ key, value }) {
        // Log the key and value (example).
        console.log(key + " was set to " + value.toString())
    })
}
```
Keep in mind that features must be dynamic for the `changed` listener to work.