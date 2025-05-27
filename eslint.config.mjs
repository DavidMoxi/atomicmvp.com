/**
 * @file ESLint configuration using the new flat config format.
 * This config extends Next.js rules for Core Web Vitals and TypeScript.
 */

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

/** @type {string} */
const __filename = fileURLToPath(import.meta.url);

/** @type {string} */
const __dirname = dirname(__filename);

/** @type {FlatCompat} */
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import("eslint").Linter.FlatConfig[]} */
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
