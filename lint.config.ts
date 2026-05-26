import type { ITtscLintConfig } from '@ttsc/lint';

// Shared benchmark lint rules matching the legacy ESLint branch.
export default {
  format: {
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    trailingComma: 'all',
    singleQuote: true,
  },
  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    eqeqeq: 'error',
    'object-shorthand': 'error',
    'no-unneeded-ternary': 'error',
    'prefer-template': 'error',
    'no-useless-rename': 'error',
    'dot-notation': 'error',
    'no-extra-boolean-cast': 'error',
    'no-useless-escape': 'error',
    'typescript/prefer-as-const': 'error',
    'typescript/prefer-namespace-keyword': 'error',
    // Prettier and ttsc format disagree on call-arg wrapping in a handful of
    // files (common/configurable-module.builder.ts, core/instance-wrapper.ts,
    // websockets/ws-context-creator.ts). Disable print-width reflow so source
    // stays byte-identical between branches.
    'format/print-width': 'off',
  },
} satisfies ITtscLintConfig;
