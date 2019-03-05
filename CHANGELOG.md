# react-universal-tilt Changelog

## 1.3.0 beta 1 (Soon)
#### Internal
- rewritten with React Hooks

#### Breaking Changes
- dropped support for React < 16.8.0

## 1.2.0 (2019-03-05)
#### Repository Changes
- updated dependencies

#### Breaking Changes
- renamed `methods` prop to `callbacks`

## 1.2.0 beta 2 (2019-01-18)
#### Breaking Changes
- splitted `options` prop into `settings` and `methods`

#### Repository Changes
- updated npm scripts
- cleaned up Webpack config
- removed unused dependencies
- updated ESLint config

#### Internal
- updated default props config

## 1.2.0 beta 1 (2018-12-10)
#### Internal
- added universal-tilt.js `destroy()` method call on `componentWillUnmount()`

#### Dependencies
- updated universal-tilt.js to v2.0.0 beta 1

#### Improvement
- removed PropTypes from output files

#### Repository Changes
- added Travis CI config
- added Prettier config
- added ESLint config

## 1.1.4 (2018-11-12)
#### Improvement
- set style option as empty object when `style` props are undefined

## 1.1.3 (2018-11-11)
#### Bug Fix
- fixed bug with `window` global variable in Node.js

## 1.1.2 (2018-11-01)
#### Internal
- cleaned up

#### Dependencies
- removed unused devDependencies

## 1.1.0 / 1.1.1 (2018-10-21)
#### Dependencies
- updated universal-tilt.js to v1.2.0

## 1.0.9 / 1.0.10 (2018-09-30)
#### Internal
- cleaned up

## 1.0.8 (2018-09-29)
#### Dependencies
- updated devDependencies

## 1.0.7 (2018-09-04)
#### Dependencies
- updated universal-tilt.js to `^1.1.1`

## 1.0.6 (2018-09-01)
#### Breaking Changes
- dropped support for React `< 16.3.0`

#### Internal
- updated ref to React Refs API

#### Repository Changes
- removed map for production version

## 1.0.5 (2018-08-28)
#### Documentation
- added examples section in README.md

#### Dependencies
- updated Babel to `^7.0.0` stable
- updated babel-plugin-add-module-exports to `^0.3.3`
- updated Webpack to `^4.17.1`
- updated babel-loader to `^8.0.0` stable

## 1.0.4 (2018-07-16)
#### Dependencies
- updated universal-tilt.js to v1.1.0 (resolved bug with React build)

## 1.0.1 / 1.0.2 / 1.0.3 (2018-07-13)
#### Bug Fix
- the incompatibility problem has been fixed
- previous versions are deprecated

#### Repository Changes
- added Webpack & Babel v7
- changed default file to minified

## 1.0.0 beta 1 / 1.0.0 (2018-06-18)
#### New Feature
- added ReactTilt component with `options`, `style` and `className` options
- added support for `tiltChange` event
