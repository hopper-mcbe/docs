# Optimizations

## \_ Label

::: info
This will only work when `hopper build` or `hopper watch` is run with the `--optimize` flag
:::

Use the `_` label to strip the labeled AST node from the optimized output bundle.

```ts
export const $Main = defineComponent(() => {
  _: console.log(
    "This will only run at compile-time and in non-optimized builds."
  );

  console.log("This will always run.");
});
```

::: tip
All definitions should be labeled with `_` except `define.script` because all definition functions except `define.script` only report errors at runtime and do nothing (except return `false`) in optimized builds.
:::
