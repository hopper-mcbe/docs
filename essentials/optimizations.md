# Optimizations

## Remember to Use `--optimize` for Production

Always use the `--optimize` flag when building for production. If you used `hopper init` to create your project, then the `build-prod` script will already use this flag.

## Label `for` Loops With `_`

If you have a `for` loop that only contains code that would be stripped from the build output, the contents of the loop will be stripped but the `for` loop will not.

For example:
::: code-group

```ts [input.ts]
// This `for` loop will be in the output.
for (let i = 0; i < 10; i++) {
  _.define.entity({});
}

// This `for` loop will not be in the output.
_: for (let x = 0; x < 5; x++) {
  _.define.entity({});
}
```

```js [output.js]
// NOTE: not actual output.

// The first loop:
for (let i = 0; i < 10; i++);

// The second loop will not be in the output.
```

:::

The contents of the `for` loop are not stripped by [terser](https://terser.org/) because `for` loops can contain any expression inside the parenthesis.

For example:

```ts
// This `for` loop will log "Hello, World!" to the console
// twice even though it does not have a body.
for (let i = 0; i < 2; console.log("Hello, World!"), i++);
```
