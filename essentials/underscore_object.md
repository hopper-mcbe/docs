# `_` Global Object

## Overview

The `_` global object contains all the preprocessor methods. All member expressions and call expressions using the `_` object will be stripped from the build output, but will be executed at compile time (just like the [`_` label](underscore_label.md)).

For example:

```ts
// This will be removed from the JS output and an item JSON file will be generated.
_.define.item({
  format_version: "1.20.40",
  "minecraft:item": {
    description: {
      identifier: `example:water_breathing_artifact`,
      category: "items",
    },
    components: {
      "minecraft:max_stack_size": 1,
      "minecraft:icon": {
        texture: `example_water_breathing_artifact`,
      },
      "tag:example:artifact": {},
    },
  },
});

// This will stay.
$.server.world.afterEvents.itemUse.subscribe((e) => {
  // Do something.
});
```

## Reference

[CompileTimeGlobalObject Interface](https://github.com/hopper-mcbe/hopper-mcbe/blob/39f6bcc6435c69246ebfbf7fe09cfdf315f2642a/types/script_globals_helper_types.d.ts#L83)
