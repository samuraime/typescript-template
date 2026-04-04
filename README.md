# TypeScript Template

A modern TypeScript project template with strict type checking, linting, formatting, and Git hooks.

## Features

- **TypeScript** — strict mode via [`@tsconfig/strictest`](https://github.com/tsconfig/bases), ESM output
- **ESLint** — [`typescript-eslint`](https://typescript-eslint.io) strict + stylistic type-checked rules
- **Prettier** — opinionated code formatting, configured for clean git diffs (`trailingComma`, `proseWrap`)
- **Husky** — Git hooks
- **lint-staged** — run linters on staged files only

## Scripts

| Script                | Description                    |
| --------------------- | ------------------------------ |
| `npm run build`       | Compile TypeScript to `dist/`  |
| `npm run build:watch` | Compile in watch mode          |
| `npm run type-check`  | Type-check without emitting    |
| `npm run lint`        | Lint and auto-fix with ESLint  |
| `npm run format`      | Format all files with Prettier |

## Git Hooks

- **pre-commit** — runs `lint-staged` to lint and format staged files before each commit
