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
    // Additional rules from plugin:@typescript-eslint/recommended that the
    // legacy nestjs config inherits. Mirrored here so the lint cells compare
    // the same effective rule set. The four rules dropped from the legacy
    // side as well (no-empty-function, typescript/adjacent-overload-signatures,
    // typescript/no-inferrable-types, typescript/triple-slash-reference)
    // diverge in defaults from the typescript-eslint implementation and fire
    // on NestJS code that the legacy preset accepts; excluding them on both
    // sides keeps the benchmark a like-for-like comparison.
    'prefer-spread': 'error',
    'no-array-constructor': 'error',
    'typescript/ban-ts-comment': 'error',
    'typescript/no-empty-interface': 'error',
    'typescript/no-extra-non-null-assertion': 'error',
    'typescript/no-misused-new': 'error',
    'typescript/no-namespace': 'error',
    'typescript/no-non-null-asserted-optional-chain': 'error',
    'typescript/no-non-null-assertion': 'error',
    // Prettier and ttsc format disagree on call-arg wrapping in a handful of
    // files (common/configurable-module.builder.ts, core/instance-wrapper.ts,
    // websockets/ws-context-creator.ts). Disable print-width reflow so source
    // stays byte-identical between branches.
    'format/print-width': 'off',
  },
} satisfies ITtscLintConfig;
