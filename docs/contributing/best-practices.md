---
sidebar_position: 6
---

# Best Practices

Lots of people contribute code to ScratchTools, meaning code quality is very important. Here are some of our best practices for features.

## Don't select using hashed class names

You'll often find elements around the Scratch website that end with an underscore and 5 characters made up of letters and numbers. Avoid using CSS/query selectors on those tags.

Instead, use other selectors that aren't specific to the hash. Here's an example:

:::danger[Instead of this]

```css
.share-button_share-button_Nxxf0 {
  display: none;
}
```

:::

:::tip[Try this]

```css
[class^="share-button_share-button"] {
  display: none;
}
```

:::