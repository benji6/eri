# AGENTS.md

## Project overview

Eri is a React 19 and TypeScript design-system package. It produces:

- a publishable ES module and declaration files in `dist/`;
- a bundled stylesheet at `dist/style.css`;
- a Vite-powered documentation site from `docs/` into `build/`.

Use the Node version in `.nvmrc` and npm with the committed `package-lock.json`.

## Repository layout

- `src/index.ts` is the public package entry point. It imports the global CSS
  foundation and re-exports all public React components and utilities.
- `src/components/<Component>/` contains public components. A component usually
  has `index.tsx` and a colocated `style.css`; compound subcomponents live in a
  nested directory, such as `Button/ButtonGroup/`.
- `src/privateComponents/` contains implementation-only building blocks. Do not
  export these from `src/index.ts`.
- `src/vars/` defines design tokens as CSS custom properties, and `src/utils/`
  provides globally imported CSS utility classes plus small TypeScript helpers.
- `docs/` is the documentation application. Component examples live in
  `docs/components/Components/`; its route and navigation registrations live in
  `docs/components/Routes/index.tsx` and `docs/components/App/index.tsx`.
- `vite.config.css.ts` builds the library stylesheet, while
  `tsconfig.build.json` and `scripts/processBuiltFiles.mjs` build and postprocess
  the JavaScript and type declarations. `vite.config.ts` builds the docs site.
- `dist/` and `build/` are generated artifacts; do not edit them manually.

## Component and styling conventions

- Write strict TypeScript function components using the React JSX runtime.
  Public components commonly expose an `IProps` interface extending the
  appropriate native HTML attribute type.
- Import a component's colocated stylesheet first (`import "./style.css";`).
  Follow existing class names: lowercase component names with BEM-style
  modifiers, for example `.button--primary`.
- Preserve native HTML behavior and accessibility. Forward applicable native
  props, use semantic elements, and keep component-specific ARIA attributes
  intact. ESLint includes React Hooks and `jsx-a11y` recommended rules.
- Prefer existing CSS custom properties from `src/vars/` and utility classes
  from `src/utils/` over new hard-coded visual values. The design supports both
  light and dark color schemes through these tokens.
- When adding a public component or utility, export it from `src/index.ts`.
  Add or update its docs example and register any new docs route and navigation
  link when it is intended to be discoverable in the style guide.
- Keep implementation details within `src/privateComponents/` when they are
  only shared internally.
- Keep documentation and agent instructions current: update `README.md`, the
  relevant `docs/` examples and routes, and this `AGENTS.md` whenever a change
  affects public behavior, project architecture, development workflows, build
  commands, or repository conventions.

## Commands

```sh
npm ci                    # install exact dependencies
npm start                 # run docs Vite server on port 1235
npm run build             # build the library into dist/
npm run style-guide:build # build docs site into build/
npm test                  # formatting, lint, type checks, and npm audit
npm run test:fmt          # Prettier check
npm run test:lint         # CSS and script linting
npm run test:types        # TypeScript check without emitting files
npm run fmt               # apply Prettier and CSS/script lint fixes
```

There is currently no unit-test runner or committed test suite. For source
changes, run the narrowest relevant command(s), then `npm test` before
submitting when practical. Run `npm run build` for changes that affect library
exports or its build pipeline, and `npm run style-guide:build` for docs changes.

## Formatting and CI

- Prettier formats all files. Do not manually fight its output.
- ESLint uses JavaScript, strict and stylistic TypeScript, React, React Hooks,
  and JSX accessibility recommended configurations. `build/` and `dist/` are
  ignored.
- Stylelint uses `stylelint-config-recommended`; the only local exception is
  `no-descending-specificity`.
- CI runs `npm ci` then `npm test` on every push. On `master`, a passing build
  is released via semantic-release, so use conventional commit messages when
  creating commits.
