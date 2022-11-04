module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        root: ['./src/controllers'],
        alias: {
          routes: './src/routes',
          middleware: './src/middlewares',
          models: './src/models',
          services: './src/services',
          tests: './src/tests',
          mocks: './src/__mocks__',
        },
      },
    ],
  ],
};
