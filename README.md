# [react-universal-tilt](https://github.com/universal-tilt-js/react-universal-tilt)

[![NPM version](http://img.shields.io/npm/v/react-universal-tilt.svg?style=flat-square)](https://www.npmjs.com/package/react-universal-tilt)
[![NPM downloads](http://img.shields.io/npm/dm/react-universal-tilt.svg?style=flat-square)](https://www.npmjs.com/package/react-universal-tilt)

#### [universal-tilt.js](https://www.npmjs.com/package/universal-tilt.js) implementation for React component
## Demo
**[Live – check website](https://universal-tilt-js.github.io/universal-tilt.js/)**<br>
**[Playground – play with library in Storybook](https://universal-tilt-js.github.io/react-universal-tilt/)**

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
  settings={ /* settings */ }
  callbacks={ /* callbacks */ }
  className={ /* class name(s) */ }
  tiltChange={ /* event output destination */ }
  // other props for div tag e.g. style
/>
```

You can add components with or without additional content:

*with:*
```js
<ReactTilt /* options */>
  // additional content
</ReactTilt>
```
*without:*
```js
<ReactTilt /* options */ />
```

## Props
Name | Type | Default | Description | Available options
-|-|-|-|-
**settings** | object | `{}` | [Default universal-tilt.js settings](https://github.com/universal-tilt-js/universal-tilt.js#settings) | [universal-tilt.js settings](https://github.com/universal-tilt-js/universal-tilt.js#settings)
**callbacks** | object | `{}` | [Default universal-tilt.js callbacks](https://github.com/universal-tilt-js/universal-tilt.js#callbacks) | [universal-tilt.js settings](https://github.com/universal-tilt-js/universal-tilt.js#callbacks)
**className** | string | `tilt` | Tilt element class name | Name of tilt element

## Event
`tiltChange` event will output the x, y & angle of tilting

## Examples
```js
import React, { Component } from 'react';
import ReactTilt from 'react-universal-tilt';

/* ------ First Example ------ */

export class FirstExample extends Component {
  render() {
    return (
      <ReactTilt
        settings={{
          base: 'window',
          reverse: true
        }}

        style={{
          'border': '1px solid #333'
        }}

        className="tilt-elem my-tilt"
      />
    );
  }
}

/* ------ Second Example ------ */

function myFunc(el) {
  el.style.backgroundColor = '#f00';
}

export class SecondExample extends Component {
  output(e) {
    console.log(e.tiltX, e.tiltY, e.angle);
  }

  render() {
    const style = {
      'border': '1px solid #333'
    };

    return (
      <ReactTilt
        settings={{
          speed: 500,
          scale: 1.3
        }}

        callbacks={{
          onMouseMove: el => myFunc(el)
        }}

        style={style}

        className="tilt-elem my-tilt"

        tiltChange={this.output}
      >
        <h3>Hello World!</h3>
      </ReactTilt>
    );
  }
}
```

## License
This project is licensed under the MIT License © 2018-present Jakub Biesiada
