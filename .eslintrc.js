module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],
  plugins: ['prettier'],
  env: {
    browser: true
  },
  settings: {
    react: {
      version: require('./package.json').devDependencies.react
    }
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  }
};
