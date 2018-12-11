module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
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
  }
};
