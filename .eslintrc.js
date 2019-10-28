module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',
    'linebreak-style': 0,
    // "linebreak-style": [
    //     "error",
    //     "unix"
    // ],
    // "quotes": [
    //     "error",
    //     "single"
    // ],
    quotes: 0,
    semi: 0,
    // "semi": [
    //     "error",
    //     "always"
    // ],
    curly: ['error', 'all'],
    'default-case': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-implicit-coercion': 'error',
    'no-invalid-this': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-new-func': 'error',
    'no-useless-return': 'error',
    'global-require': 'error',
    'no-path-concat': 'error',
    'no-sync': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    // camelcase: 'error',
    camelcase: 0,
    // "comma-dangle": [
    //     "error",
    //     "always-multiline"
    // ],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-dangle': 0,
    'comma-style': 0,
    // "comma-style": [
    //     "error",
    //     "last"
    // ],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // "lines-around-comment": [
    //     "error",
    //     { "beforeBlockComment": true }
    // ],
    'lines-around-comment': 0,
    'newline-after-var': ['error', 'always'],
    'newline-before-return': 'error',
    'no-multi-assign': 'error',
    'max-params': [1, 3],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
      },
    ],
    'no-shadow-restricted-names': 'error',
    'no-undef-init': 'error',
    'keyword-spacing': 'error',
    'space-before-blocks': ['error', 'always'],
  },
};
