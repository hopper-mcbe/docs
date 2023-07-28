# Naming Conventions

## Components

All components should use `UpperCamelCase`/`PascalCase` variable names. If a component should only be implemented once then it should be prefixed with a `$`.

```ts
// This component can be implemented as many times as necessary:
const MyComponent = defineComponent(() => {});

// This component should only be implemented once:
const $ImplementOnce = defineComponent(() => {});
```

Components prefixed with a `$` should not take any additional arguments.

The main component (the one that is used in `createAddon`, see [createAddon](/essentials/create-addon)) should always be named `$Main`.

## Component Files

Component files should have the same name as the component it contains (they should only contain one component, see [Source Organization](source-organization#component-files)).

::: code-group

```ts [$Main.ts]
// `export default` can also be used.
export const $Main = defineComponent(() => {});
```

```ts [MyComponent.ts]
// `export default` can also be used.
export const MyComponent = defineComponent(() => {});
```

:::
