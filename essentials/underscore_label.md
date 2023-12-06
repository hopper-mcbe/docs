# `_` Label

## Overview

The `_` will strip the labeled AST node from the build output, but will still be executed at compile time. This is exactly the same as using the [`_` global object](underscore_object.md).

For example:

```ts
_: console.log("This will only run at compile time!");

// This will stay.
$.server.world.afterEvents.itemUse.subscribe((e) => {
  // Do something.
});
```

## Reference

[CompileTimeGlobalObject Interface](https://github.com/hopper-mcbe/hopper-mcbe/blob/39f6bcc6435c69246ebfbf7fe09cfdf315f2642a/types/script_globals_helper_types.d.ts#L83)
