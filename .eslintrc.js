module.exports = {
  root: true,
  extends: [
    /*"plugin:vue/vue3-essential",*/
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    /*"@vue/eslint-config-typescript/recommended",*/
    "plugin:prettier/recommended",
  ],
  env: {
    /*"vue/setup-compiler-macros": true,*/
    node: true,
  },
  rules: {
    /*'vue/no-unused-vars': 'error',*/
    quotes: ["error", "double"],
    semi: ["error", "always"],
    /*"@typescript-eslint/comma-dangle": "off",*/
    "prettier/prettier": ["error", { endOfLine: "off" }],
    /*"javascript.validate.enable": false,*/
  },
};