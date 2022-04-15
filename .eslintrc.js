module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base', 'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ["no-plusplus": "off",
    "no-restricted-syntax": "off",
  ],
  rules: {
  },
};
