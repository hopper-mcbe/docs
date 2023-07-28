# Source Organization

## File Structure

```
<project-name>/
  - assets/
    - BP/
      - manifest.json
      - ...
    - RP/
      - manifest.json
      - ...
  - src/
    - components/
      - $Main.ts
      - ...
    - index.ts
    - ...
  - package.json
  - ...
```

## Component Files

Component files should only contain one component. It can be a default export or a named export.
::: code-group

```ts [NamedExport.ts]
export const NamedExport = defineComponent(() => {});
```

```ts [DefaultExport.ts]
export default defineComponent(() => {});
```

:::
