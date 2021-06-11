# [react-universal-tilt](https://github.com/universal-tilt-js/react-universal-tilt)

[![NPM version](https://img.shields.io/npm/v/react-universal-tilt?style=flat-square)](https://www.npmjs.com/package/react-universal-tilt)
[![NPM downloads](https://img.shields.io/npm/dm/react-universal-tilt?style=flat-square)](https://www.npmjs.com/package/react-universal-tilt)
[![NPM license](https://img.shields.io/npm/l/react-universal-tilt?style=flat-square)](https://www.npmjs.com/package/react-universal-tilt)
[![Codecov](https://img.shields.io/codecov/c/github/universal-tilt-js/react-universal-tilt?style=flat-square)](https://codecov.io/gh/universal-tilt-js/react-universal-tilt)
[![Travis](https://img.shields.io/travis/universal-tilt-js/react-universal-tilt/main?style=flat-square)](https://travis-ci.org/universal-tilt-js/react-universal-tilt)
[![Bundle size](https://img.shields.io/bundlephobia/min/react-universal-tilt?style=flat-square)](https://bundlephobia.com/result?p=react-universal-tilt)


## About

**[universal-tilt.js](https://www.npmjs.com/package/universal-tilt.js) implementation for React component**

### Demo

**[Live – check website](https://universal-tilt-js.github.io/universal-tilt.js/)**<br>
**[Playground – play with library in Storybook](https://universal-tilt-js.github.io/react-universal-tilt/)**

### Alternatives

- [react-tilt](https://github.com/jonathandion/react-tilt) by [Jon](https://github.com/jonathandion)

## How to Use

First, install the library in your project by npm:

```sh
$ npm install react-universal-tilt
```

Or Yarn:

```sh
$ yarn add react-universal-tilt
```

## Getting Started

**• Import plugin in React application file:**

```js
import ReactTilt from 'react-universal-tilt';
```

**• Later create parallax component and pass options:**

```js
<ReactTilt
  settings={/* settings */}
  callbacks={/* callbacks */}
  onTiltChange={/* event output destination */}
  className={/* class name(s) */}
  // other props for div tag e.g. style
/>
```

You can add components with or without additional content:

_with:_

```js
<ReactTilt /* options */>
  {/* additional content */}
</ReactTilt>
```

_without:_

```js
<ReactTilt /* options */ />
```

## Props

| Name          | Type   | Default | Description                                                                                             | Available options                                                                              |
| ------------- | ------ | ------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **settings**  | object | `{}`    | [Default universal-tilt.js settings](https://github.com/universal-tilt-js/universal-tilt.js#settings)   | [universal-tilt.js settings](https://github.com/universal-tilt-js/universal-tilt.js#settings)  |
| **callbacks** | object | `{}`    | [Default universal-tilt.js callbacks](https://github.com/universal-tilt-js/universal-tilt.js#callbacks) | [universal-tilt.js settings](https://github.com/universal-tilt-js/universal-tilt.js#callbacks) |
| **className** | string | `tilt`  | Tilt element class name                                                                                 | Name of tilt element                                                                           |

## Event

`onTiltChange` event will output the x, y & angle of tilting

## Examples

```js
import React from 'react';
import ReactTilt from 'react-universal-tilt';

/* ------ First Example ------ */

export const FirstExample = () => {
  return (
    <ReactTilt
      settings={{
        base: 'window',
        reverse: true,
      }}
      style={{
        border: '1px solid #333',
      }}
      className="tilt-elem my-tilt"
    />
  );
};

/* ------ Second Example ------ */

function myFunc(el) {
  el.style.backgroundColor = '#f00';
}

export const SecondExample = () => {
  const handleTiltChange = (e) => {
    console.log(e.tiltX, e.tiltY, e.angle);
  };

  const style = {
    border: '1px solid #333',
  };

  return (
    <ReactTilt
      settings={{
        speed: 500,
        scale: 1.3,
      }}
      callbacks={{
        onMouseMove: (el) => myFunc(el),
      }}
      style={style}
      className="tilt-elem my-tilt"
      onTiltChange={handleTiltChange}
    >
      <h3>Hello World!</h3>
    </ReactTilt>
  );
};
```

## License

This project is licensed under the MIT License © 2018-present Jakub Biesiada
