# Components

## Overview

Components are Hopper's way to encapsulate files in an easily reusable format.

Here's an example of a component:

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

## The defineComponent Function

The `defineComponent` function takes a callback and returns a new callback with the same arguments as the input callback (except the first argument) that can be used to instantiate the component for an implementation.

```ts
const MyComponent = defineComponent((arg, a: string, b: string) => {
  console.log(`${a}, ${b}!`);
});

const $Main = defineComponent(({ implement }) => {
  // The returned function can be used to instantiate the component
  // for an implementation:
  implement(MyComponent("Hello", "World"));
});
```

This is the type signature for `defineComponent`:

```ts
type DefineComponentGlobalFunc = <T extends unknown[]>(
  callback: DefineComponentGlobalFuncCallback<T>
) => (...args: T) => Component;

// Callback type:
type DefineComponentGlobalFuncCallback<T extends unknown[]> = (
  arg: DefineComponentCallbackArg, // You'll learn more about this soon.
  ...ctorArgs: T
) => void;
```

## Defining Files

Use the `define` property of the first argument of the `defineComponent` callback to define files.

```ts
const $MyComponent = defineComponent(({ define }) => {
  define.entity({
    format_version: "1.20.10",
    "minecraft:entity": {
      description: {
        identifier: "namespace:entity",
      },
      components: {},
    },
  });
});
```

All of the `define` methods return the file name of the file or `false` if the file could not be created (usually because of the `options.once` property) except `define.script`. The file name is a unique string if `options.name` is unspecified, otherwise it is `options.name`.

### Defining Files Once

You can use the `options.once` property on a define method to make a file only define once. If the is defined again, it will not be written and the define method will return `false`.

Example use:

```ts
// This file will be created:
define.item({}, { once: { key: "itemKey" } });

// This file will not be created:
define.item({}, { once: { key: "itemKey" } });

// It also applies if they are not of the same type.
// This file will not be created:
define.entity({}, { once: { key: "itemKey" } });

// This file will be created because it uses a different `key`:
define.item({}, { once: { key: "itemKey2" } });
```

### Type Signature

This is the type signature for the `define` property:

```ts
interface ComponentBodyDefine {
  serverAnimationController: DefineFileFunc<mcDefs.b_animation_controller.Main>;
  serverAnimation: DefineFileFunc<mcDefs.b_animations.Main>;
  biome: DefineFileFunc<mcDefs.b_biomes.Main>;
  block: DefineFileFunc<mcDefs.b_blocks.Main>;
  dialogue: DefineFileFuncOptionsRequired<
    mcDefs.b_dialogue.Main,
    DefineFileOptionsNameRequired
  >;
  entity: DefineFileFunc<mcDefs.b_entities.Main>;
  featureRules: DefineFileFunc<mcDefs.b_feature_rules.Main>;
  feature: DefineFileFunc<mcDefs.b_features.Main>;
  item: DefineFileFunc<mcDefs.b_items.Main>;
  lootTable: DefineFileFuncOptionsRequired<
    mcDefs.b_loot_tables.Main,
    DefineFileOptionsNameRequired
  >;
  recipe: DefineFileFunc<mcDefs.b_recipes.Main>;
  spawnRules: DefineFileFunc<mcDefs.b_spawn_rules.Main>;
  tradeTable: DefineFileFuncOptionsRequired<
    mcDefs.b_trading.Main,
    DefineFileOptionsNameRequired
  >;
  clientAnimationController: DefineFileFunc<mcDefs.r_animation_controller.Main>;
  clientAnimation: DefineFileFunc<mcDefs.r_actor_animation.Main>;
  attachable: DefineFileFunc<mcDefs.r_attachables.Main>;
  clientEntity: DefineFileFunc<mcDefs.r_entity.Main>;
  particle: DefineFileFunc<mcDefs.r_particles.Main>;
  renderController: DefineFileFunc<mcDefs.r_render_controllers.Main>;
  rawText: DefineFileFuncOptionsRequired<string, DefineFileRawOptions>;
  /**
   * Defines a callback that will execute for each implementation.
   */
  script(callback: DefineScriptCallback, options?: DefineScriptOptions): void;
}

// Other types:
interface DefineFileOptions {
  /**
   * The file name. Defaults to a unique string.
   */
  name?: string;
  /**
   * The root directory.
   */
  rootDir?: string;
  /**
   * The file extension.
   */
  ext?: string;
  /**
   * Only create the file with this `key` once.
   */
  once?: {
    key: string;
  };
}

interface DefineFileOptionsNameRequired extends DefineFileOptions {
  /**
   * The file name.
   */
  name: string;
}

interface DefineFileRawOptions extends DefineFileOptions {
  rootDir: string;
  ext: string;
}

interface DefineScriptOptions {
  /**
   * Only execute the script with this `key` once.
   */
  once?: {
    key: string;
  };
}

type DefineFileFunc<T> = (
  content: T,
  options?: DefineFileOptions
) => string | false;

type DefineFileFuncOptionsRequired<
  T,
  O extends DefineFileOptions = DefineFileOptions
> = (content: T, options: O) => string | false;

type DefineScriptCallback = (modules: any) => void;
```

## Implementations

Use the `implement` method of the first argument of the `defineComponent` callback to implement another component into the current component.

```ts
const MyComponent = defineComponent(({ define }) => {
  // This item will be written for each implementation (twice).
  define.item({});
});

const $ImplementsMyComponent = defineComponent(({ implement }) => {
  implement(MyComponent());
});

const $AlsoImplementsMyComponent = defineComponent(({ implement }) => {
  implement(MyComponent());
});

const $Main = defineComponent(({ define }) => {
  implement($ImplementsMyComponent());
  implement($AlsoImplementsMyComponent());
});
```

This is the type signature for `implement`:

```ts
function implement(component: Component): void;
```
