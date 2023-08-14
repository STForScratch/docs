---
sidebar_position: 8
---

# feature.addEventListener
This API allows you to add listeners to the feature. They are extremely important to dynamic features.

## Event: disabled
Using the `disabled` event, dynamic features can detect when they are disabled. Here's an example:
```js
export default async function ({ feature, console }) {
    // Add listener.
    feature.addEventListener("disabled", function() {
        // Log that the feature has been disabled (example).
        console.log("Disabled!")
    })
}
```

## Event: enabled
Using the `enabled` event, dynamic features can detect when they are enabled.

:::info

The `enabled` event only fires if the feature was already dynamically disabled on the page. If it hasn't been, then the feature is injected normally.

:::

Here's an example:
```js
export default async function ({ feature, console }) {
    // Add listener.
    feature.addEventListener("enabled", function() {
        // Log that the feature has been enabled (example).
        console.log("Enabled!")
    })
}
```