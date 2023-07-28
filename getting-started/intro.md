# Introduction

## What is Hopper?

Hopper is a Minecraft: Bedrock Edition add-on compiler designed to allow developers to create maintainable and organized add-ons quickly and without repetitive tasks.

Hopper has one core concept; components. Here's an example:

```ts
export const UiItem = defineComponent(({ define }, id: string) => {
  define.item({
    format_version: "1.20.10",
    "minecraft:item": {
      description: {
        identifier: id,
      },
      components: {
        "minecraft:chargeable": {},
      },
    },
  });

  define.script(({ server, serverUi }) => {
    server.world.afterEvents.itemStartUse.subscribe((e) => {
      if (e.itemStack.typeId === id && e.source instanceof server.Player) {
        new serverUi.ActionFormData()
          .title("Hello!")
          .body(`Hello, ${e.source.name}`)
          .button("Close")
          .show(e.source);
      }
    });
  });
});
```

The above component creates an item and a script that will open an action form when a player uses the item.

It can be reused as many times as necessary like this:

```ts
import { UiItem } from "./UiItem";

// The '$' prefix is a naming convention for components that
// should not be implemented more than once.
const $MyUiItem = defineComponent(({ implement }) => {
  implement(UiItem("namespace:my_ui_item"));
});
```
