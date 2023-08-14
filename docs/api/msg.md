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

## Setting localization in data file
In the feature's `data.json` file, you can specify important translations and strings that need to be translated for the feature.

:::note

If a string isn't translated into a user's browser language, it defaults to English. The same is true on the settings page.

:::

Addition to the `data.json` file:
```json
    "translations": ["en"],
```
That's it! Just add that to the feature's `data.json` file. Now, you need to specify the specific languages.

Start by creating a file within the feature's file. Name it `locales`. Then, create a file called `en.json` within it. Here's an example file based on the JavaScript example at the top:
```json
{
    "online-text": "Online"
}
```
The key (`online-text` in this case) represents the ID, which the JavaScript API uses to get the translated string. The value ("Online" in this case) is the translated string.

Our translators update the values in other languages for you, there's no need for you to do that yourself (please don't).