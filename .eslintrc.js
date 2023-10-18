module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "comma-dangle": ["error", "always-multiline"],
    "no-multi-spaces": [
      "error",
      { ignoreEOLComments: true, exceptions: { VariableDeclarator: true } },
    ],

    "prettier/prettier": [
      "error",
      {
        useTabs: false,
        endOfLine: "auto",
      },
    ],
    indent: ["error", 4],
    "prettier/prettier": [4, { useTabs: true }],
  },
};
