---
sidebar_position: 3
---

# feature.msg
This is a function that allows you to get localized strings. Here's an example of how to use it in JavaScript:
```js
export default async function ({ feature, console }) {
    // Create an element (example).
    let span = document.createElement("span")
    // Get message.
    span.textContent = feature.msg("online-text")
}
```
In the example above, the span's text is now the translated string matched with the ID `online-text`. The value depends on the user's browser language.

## Setting up localization strings
:::note

If a string isn't translated into a user's browser language, it defaults to English. The same is true on the settings page.

:::

Start by creating a folder within `/feature-locales/`. Name it after the ID of the feature. Then, create a file called `en.json` within it. Here's an example file based on the JavaScript example at the top:
```json
{
    "online-text": "Online"
}
```
The key (`online-text` in this case) represents the ID, which the JavaScript API uses to get the translated string. The value ("Online" in this case) is the translated string.

Our translators update the values in other languages for you, there's no need for you to do that yourself (please don't).