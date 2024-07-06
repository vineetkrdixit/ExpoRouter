module.exports = [
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["node_modules/**"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: {
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks"),
      prettier: require("eslint-plugin-prettier"),
      "unused-imports": require("eslint-plugin-unused-imports"),
    },
    rules: {
      "prettier/prettier": "error",
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
