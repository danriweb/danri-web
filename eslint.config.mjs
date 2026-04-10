import fsdPlugin from "@conarti/eslint-plugin-feature-sliced";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      "@conarti/feature-sliced": fsdPlugin,
    },
    rules: {
      "@conarti/feature-sliced/absolute-relative": "error",
    },
    ignores: ["src/i18n/**", "src/shared/**"],
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
