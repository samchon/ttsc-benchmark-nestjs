const benchmarkRules = {
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
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/prefer-namespace-keyword': 'error',
};

module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
      },
      rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/ban-types': 'off',
        // Disabled because @ttsc/lint has no counterpart; keeps lint cells fair.
        'prefer-rest-params': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        // Disabled on both sides: the @ttsc/lint implementation flags NestJS
        // patterns that the typescript-eslint preset accepts. Dropping these
        // keeps the benchmark a like-for-like rule-set comparison.
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/adjacent-overload-signatures': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
        ...benchmarkRules,
      },
    },
    {
      files: ['**/*.spec.ts', 'integration/**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.spec.json',
        sourceType: 'module',
      },
      rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        // Disabled because @ttsc/lint has no counterpart; keeps lint cells fair.
        'prefer-rest-params': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        // Disabled on both sides: the @ttsc/lint implementation flags NestJS
        // patterns that the typescript-eslint preset accepts. Dropping these
        // keeps the benchmark a like-for-like rule-set comparison.
        '@typescript-eslint/adjacent-overload-signatures': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
      },
    }
  ]
};
