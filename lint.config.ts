import type { ITtscLintConfig } from "@ttsc/lint";

// Shared benchmark lint rules matching the legacy ESLint branch.
export default {
  ignores: [
    "**/*.spec.ts",
    "**/test/**",
    "**/node_modules/**",
    "**/dist/**",
    "integration/**",
    "sample/**",
  ],
  rules: {
    "no-var": "error",
    "prefer-const": "error",
    eqeqeq: "error",
    "object-shorthand": "error",
    "no-unneeded-ternary": "error",
    "prefer-template": "error",
    "no-useless-rename": "error",
    "dot-notation": "error",
    "no-extra-boolean-cast": "error",
    "no-useless-escape": "error",
    "prefer-as-const": "error",
    "prefer-namespace-keyword": "error",
  },
} satisfies ITtscLintConfig;
