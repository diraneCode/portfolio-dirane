import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      // ✅ Autorise le type any
      "@typescript-eslint/no-explicit-any": "off",

      // ✅ Corrige ton erreur "Expected an assignment or function call"
      "@typescript-eslint/no-unused-expressions": "off",

      // ✅ Les warnings React Hooks deviennent non bloquants
      "react-hooks/exhaustive-deps": "warn",

      // ✅ Autorise <img> au lieu de <Image />
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
