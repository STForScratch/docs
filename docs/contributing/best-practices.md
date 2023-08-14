---
sidebar_position: 6
---

# Best practices

Lots of people contribute code to ScratchTools, meaning code quality is very important. Here are some of our best practices for features.

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