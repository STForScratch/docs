---
sidebar_position: 6
---

# Best practices

Lots of people contribute code to ScratchTools, meaning code quality is very important. Here are some of our best practices for features.

## Format your code

Readable code is extremely important. Make sure that all code is formatted correctly. We recommend using an extension such as [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) if you use Visual Studio Code when developing.

There are also other extensions around, as well as websites that allow you to beautify code. Numerous websites exist for both JavaScript and CSS.

Formatting code is extremely important for future development, and makes code much easier to understand.

## Try not to remove vanilla Scratch elements

It's generally not a good idea to remove original elements when unnecessary. This makes it difficult to make features dynamic, since recreating elements on the page could lead to localization issues.

This practice only applies to elements already existing on the page, not created by the feature. However, it's also not a good idea to remove elements created by other features.

Removing elements already existing from vanilla Scratch or from other features can cause things to break. For example, removing the stage from the editor can crash the editor.

## Use comments

When writing code, it's important to use comments when necessary. If you're writing code that may be misinterpreted or hard to understand in future development, add comments to explain what the code does or what it affects.

JS:

```js
// Changes the color of the navigation bar on 3.0 pages
let navigation = await ScratchTools.waitForElement("#navigation")
navigation.style.backgroundColor = "var(--ste-blue)"
```

CSS:

```css
/* Changes the color of the navigation bar on 3.0 pages */

#navigation {
  background-color: var(--ste-blue);
}
```

## Don't select using hashed class names

You'll often find elements around the Scratch website that end with an underscore and 5 characters made up of letters and numbers. Avoid using CSS/query selectors on those tags.

Instead, use other selectors that aren't specific to the hash. Here's an example:

:::dangerInstead of this

```css
.share-button_share-button_Nxxf0 {
  display: none;
}
```

:::

:::tipTry this

```css
[class^="share-button_share-button"] {
  display: none;
}
```

:::

## Put "ste" before class names on added elements
Many ScratchTools features create new elements. Because of this, it's very important for compatability with Scratch, other features, and other extensions that we name the classes of new elements accordingly.

For all added elements, their class names (if any) should begin with `ste` except for when mimicking a Scratch class name.

## Don't use innerHTML
Using the `innerHTML` attribute on elements can lead to XSS vulnerabilities and is just generally a bad idea. Instead, create other elements within the element.

:::dangerInstead of this

```js
element.innerHTML = '<h1>Hello!</h1>'
```

:::

:::tipTry this

```js
let h1 = document.createElement("h1")
h1.textContent = "Hello!"
element.appendChild(h1)
```

:::