# `$` Label

AST nodes labeled with `$` will be ignored at compile time, but will still be included in the output This is exactly the same as using the [`$` global object](dollar_object.md).

For example:

```ts
$: console.log("This will NOT run at compile time!");
console.log("This will run at compile time and in Minecraft!");
_: console.log("This will ONLY run at compile time!");
```

See [`_` Label](underscore_label.md).
