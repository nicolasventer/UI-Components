# UI-Components

Interactive **React 19** + **TypeScript** demo for a small in-repo UI kit. [`Client/src/pages/App.tsx`](Client/src/pages/App.tsx) mounts [`ComponentDemo`](Client/src/components/ComponentDemo.tsx), which exercises primitives in [`Client/src/components/_ui/`](Client/src/components/_ui/). There is **no published npm package**—the **Client** app is the catalog.

## What’s in the repo

- **`Client/src/components/_ui/`** — Components, `useTheme` / `useColorScheme`, shared [`index.css`](Client/src/components/_ui/index.css) (tokens + base styles).
- **`Client/src/components/_ui/themes/`** — Per-theme CSS; loaded when the user picks a theme in the demo.
- **Demo** — [`ComponentDemo.tsx`](Client/src/components/ComponentDemo.tsx), [`ComponentToolbox.tsx`](Client/src/components/ComponentToolbox.tsx) (+ `ComponentToolbox.module.css`), [`ThemeSelector.tsx`](Client/src/components/ThemeSelector.tsx) (+ `ThemeSelector.module.css`), [`FileBrowserDemo.tsx`](Client/src/components/FileBrowserDemo.tsx).
- **`Client/docs/`** — Static site output produced by [`scripts/deploy.mjs`](Client/scripts/deploy.mjs) (copy of `dist/`). Useful for hosts that serve a prebuilt folder (for example GitHub Pages on `docs/`).
- **`Client/eslint.config.js`** — ESLint flat config (TypeScript, React, hooks, refresh, `eslint-plugin-no-relative-import-paths` with same-folder exceptions).

### UI kit (`_ui`) — components

Button, ButtonBreadcrumbs, Card, CardButton, Carousel, Divider, FileBrowser, Input, LoadingOverlay (`LoadingIcon`, `PositionRelative`), Modal, NativeSelect, NodeCompare (`ImageCompare` alias), SearchInput, Slider, Switch, Tab, TabGroup, Tag, Text, Title.

Supporting: `useTheme`, `useColorScheme`, `typedOmit`, `eborder`.

### Themes

From [`useTheme.ts`](Client/src/components/_ui/useTheme.ts): **default**, **ocean**, **sunset**, **forest**, **light**, **autumn**, **restaurant** — each has `themes/<name>.css`.

## Tech stack

| Area        | Choice                                                                                                                                                                                               |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Language    | TypeScript                                                                                                                                                                                           |
| UI          | React 19                                                                                                                                                                                             |
| Build / dev | Vite 8 (`base: "./"`)                                                                                                                                                                                |
| Styling     | Global tokens in `_ui/index.css` + themes; CSS modules on demo layout components                                                                                                                     |
| Class names | `clsx`                                                                                                                                                                                               |
| Icons       | lucide-react                                                                                                                                                                                         |
| Lint        | ESLint 9 (typescript-eslint, React, React Hooks, Refresh, `eslint-plugin-no-relative-import-paths`)                                                                                                  |
| SVG (opt.)  | `vite-plugin-svgr` in devDependencies; [`vite-env.d.ts`](Client/src/vite-env.d.ts) declares `*.svg?react` — add the plugin to [`vite.config.ts`](Client/vite.config.ts) if you use that import style |
| Packages    | Bun (`Client/bun.lock`); npm/pnpm/yarn work if you install deps there                                                                                                                                |

**HTTPS locally:** [`vite.config.ts`](Client/vite.config.ts) imports **`vite-plugin-mkcert`** at the top level and only _enables_ it when `USE_HTTPS` is set. The plugin is **not** listed in [`package.json`](Client/package.json), so a clean install may not provide it—add `vite-plugin-mkcert` as a devDependency (or remove/conditionalize the import) so Vite can load. With the plugin present, leave `USE_HTTPS` unset for HTTP or set it for HTTPS via mkcert.

## Quick start

```bash
cd Client
bun install
bun run dev
```

Path alias **`@`** → `Client/src` ([`vite.config.ts`](Client/vite.config.ts)).

## Scripts (`Client/package.json`)

| Script        | Purpose                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| `dev`         | Vite dev server                                                                                              |
| `build`       | `tsc --noEmit && vite build` → output in `Client/dist/`                                                      |
| `deploy`      | `node scripts/deploy.mjs` — replaces `Client/docs/` with a copy of `dist/` (for static hosting)              |
| `buildDeploy` | `bun run build && bun run deploy`                                                                            |
| `preview`     | Static server on port **4173** for `./dist` (needs [`serve`](https://www.npmjs.com/package/serve) on `PATH`) |
| `_preview`    | `vite preview`                                                                                               |
| `lint`        | `eslint .`                                                                                                   |

**Preview:** Install `serve` globally or use `bun run _preview` after a successful build.

## Layout

```
UI-Components/
└── Client/
    ├── bun.lock
    ├── docs/ # static output from deploy (optional to commit)
    ├── dist/          # Vite build output (gitignored)
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── scripts/
    │   └── deploy.mjs
    ├── tsconfig.json
    ├── vite.config.ts
    └── src/
        ├── index.tsx
        ├── index.css
        ├── vite-env.d.ts
        ├── assets/images/
        ├── components/
        │   ├── _ui/     # kit + themes/
        │   ├── ComponentDemo.tsx
        │   ├── ComponentToolbox.tsx
        │   ├── ComponentToolbox.module.css
        │   ├── FileBrowserDemo.tsx
        │   ├── ThemeSelector.tsx
        │   └── ThemeSelector.module.css
        └── pages/
            └── App.tsx
```
