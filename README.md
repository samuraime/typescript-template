# TypeScript Template

A minimal TypeScript library template powered by
[Vite+](https://viteplus.dev/guide/), with strict type checking, linting,
formatting, and staged-file Git hooks preconfigured.

## Features

- **TypeScript 6** — strict mode via
  [`@tsconfig/strictest`](https://github.com/tsconfig/bases), ESM output, and
  declaration files
- **Vite+** — unified project tooling for dependency installation, linting,
  formatting, type checking, and tests
- **Oxlint and Oxfmt** — type-aware linting and consistent formatting configured
  in `vite.config.ts`
- **Git hooks** — Vite+ checks and formats supported staged files before each
  commit
- **VS Code integration** — the Oxc extension uses the tool binaries bundled
  with the project's Vite+ version

## Getting Started

Create a repository from this template, then install its dependencies:

```sh
vp install
vp config
```

`vp config` configures the repository's Vite+ Git hooks. The template
intentionally does not pin the package manager through `devEngines`, so it does
not inherit the npm patch version used by the template author.

## Scripts

Use `vp` as the single command-line entry point. The template does not duplicate
these commands as `package.json` scripts.

| Command                       | Description                                    |
| ----------------------------- | ---------------------------------------------- |
| `vp pack`                     | Build the library and declarations to `dist/`  |
| `vp pack --watch`             | Build continuously in watch mode               |
| `vp lint --fix .`             | Lint and automatically fix supported files     |
| `vp fmt .`                    | Format supported files                         |
| `vp check`                    | Check formatting, lint rules, and TypeScript   |
| `vp check --no-fmt --no-lint` | Type-check only                                |
| `vp test`                     | Run tests when the project contains test files |
| `vp config`                   | Configure Git hooks and agent integration      |

## Configuration

Vite+ configuration lives in `vite.config.ts`. TypeScript and TSX files staged
for commit are linted and formatted; JavaScript, JSON, Markdown, and YAML files
are formatted. Generated files under `dist/` are excluded from linting.

The included `.vscode/settings.json` expects the
[`oxc.oxc-vscode`](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode)
extension recommended by `.vscode/extensions.json`. It points Oxlint and Oxfmt
at the binaries bundled in `node_modules/vite-plus`, keeping editor behavior in
sync with command-line checks.

## Before Committing

Run the complete validation commands:

```sh
vp check
vp test
```

This starter does not include test files, so `vp test` reports that no tests
were found until tests are added by the consuming project.
