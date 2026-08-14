import { defineConfig } from 'vite-plus';

export default defineConfig({
  pack: {
    dts: true,
    format: ['esm'],
    sourcemap: true,
  },
  lint: {
    plugins: ['oxc', 'typescript', 'unicorn'],
    categories: {
      correctness: 'warn',
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
    env: {
      builtin: true,
    },
    ignorePatterns: ['dist/**'],
    jsPlugins: [
      {
        name: 'vite-plus',
        specifier: 'vite-plus/oxlint-plugin',
      },
    ],
  },
  staged: {
    '**/*.{ts,tsx}': ['vp lint --fix', 'vp fmt'],
    '**/*.{js,mjs,cjs,json,md,yml,yaml}': ['vp fmt'],
  },
  fmt: {
    trailingComma: 'all',
    singleAttributePerLine: true,
    singleQuote: true,
    printWidth: 80,
    sortPackageJson: false,
  },
});
