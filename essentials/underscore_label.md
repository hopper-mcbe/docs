# `_` Label

AST nodes labeled with `_` will be stripped from the build output, but will still be executed at compile time. This is exactly the same as using the [`_` global object](underscore_object.md).

For example:

```ts
_: console.log("This will only run at compile time!");

// This will stay.
$.server.world.afterEvents.itemUse.subscribe((e) => {
  // Do something.
});
```

See [`$` Global Object](dollar_object.md).
