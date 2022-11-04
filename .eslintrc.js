module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'prettier'],
  extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:jest/recommended', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
    babelOptions: {
      configFile: './babel.config.js',
    },
    project: './tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'prettier/prettier': ['error'],
  },
  overrides: [
    {
      files: ['*.js', '*.spec.js'],
      rules: {
        '@typescript-eslint/no-shadow': 'warn',
        '@typescript-eslint/return-await': 'warn',
        '@typescript-eslint/no-use-before-define': 'warn',
        '@typescript-eslint/no-implied-eval': 'warn',
        'jest/no-conditional-expect': 'warn',
        'jest/no-standalone-expect': 'warn',
        'no-await-in-loop': 'warn',
        'no-restricted-syntax': 'warn',
        'import/no-named-as-default-member': 'warn',
        'no-use-before-define': 'warn',
        'no-shadow': 'warn',
        'consistent-return': 'warn',
        'no-import-assign': 'warn',
        'array-callback-return': 'warn',
        'max-classes-per-file': 'warn',
        'no-param-reassign': 'warn',
      },
    },
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
      node: { paths: ['src'] },
    },
  },
};
