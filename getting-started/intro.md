# Introduction

## What is Hopper?

Hopper is a Minecraft: Bedrock Edition add-on compiler designed to allow developers to create maintainable and organized add-ons quickly and without repetitive tasks.

Hopper allows you to combine generator code and your Minecraft scripts in one file.

```ts
import { Player } from "@minecraft/server";

interface Artifact {
  onInteract(player: Player): void;
}

const ARTIFACTS: Record<string, Artifact> = {
  water_breathing_artifact: {
    onInteract(player) {
      player.addEffect("water_breathing", 400);
    },
  },
  invisibility_artifact: {
    onInteract(player) {
      player.addEffect("invisibility", 400);
    },
  },
};

for (const artifact of ARTIFACTS) {
  // Use the `_` global object to access preprocessor functions.
  _.define.item({
    format_version: "1.20.40",
    "minecraft:item": {
      description: {
        identifier: `example:${artifact.id}`,
        category: "items",
      },
      components: {
        "minecraft:max_stack_size": 1,
        "minecraft:icon": {
          texture: `example_${artifact.id}`,
        },
        "tag:example:artifact": {},
      },
    },
  });
}

// Use the `$` global object to access `@minecraft` modules.
$.server.world.afterEvents.itemUse.subscribe((e) => {
  if (!e.itemStack.hasTag("example:artifact")) return;

  const artifact = ARTIFACTS[e.itemStack.typeId.slice("example:".length)];

  artifact.onInteract(e.source);
});
```

The file above creates an item for every artifact in `ARTIFACTS` and also subscribes to the world `itemUse` event and calls the appropriate artifact's `onInteract` method when they are interacted with. The preprocessor calls will be stripped from the build output but will run during build time. The output of this will be 2 items and a `bundle.js` file containing the `ARTIFACTS` object and the `itemUse` event subscription.

## TypeScript

Hopper only supports [TypeScript](https://www.typescriptlang.org/), a strongly typed superset of JavaScript. Your code will automatically be compiled down to JavaScript at build time.
