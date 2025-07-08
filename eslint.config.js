const { defineConfig } = require("eslint/config");
const pluginImport = require("eslint-plugin-import");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  ...expoConfig,
  {
    plugins: {
      import: pluginImport,
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      "import/no-unresolved": "error",
    },
    ignores: ["dist/*"],
  },
]);
