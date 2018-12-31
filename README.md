# [react-universal-tilt](https://github.com/jb1905/react-universal-tilt)

[![NPM version](http://img.shields.io/npm/v/react-universal-tilt.svg?style=flat-square)](https://www.npmjs.com/package/react-universal-tilt)
[![NPM downloads](http://img.shields.io/npm/dm/react-universal-tilt.svg?style=flat-square)](https://www.npmjs.com/package/react-universal-tilt)

#### [universal-tilt.js](https://www.npmjs.com/package/universal-tilt.js) implementation for React component
## Demo
**[See plugin in action](https://jb1905.github.io/universal-tilt.js/)**

## How to Use
**• Install plugin via favourite package manager:**
```sh
$ npm install react-universal-tilt
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
  methods={ /* methods */ }
  styles={ /* CSS styles */ }
  className={ /* class name(s) */ }
  tiltChange={ /* event output destination */ }
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
**settings** | object | `{}` | [Default universal-tilt.js settings](https://github.com/JB1905/universal-tilt.js#settings) | [universal-tilt.js settings](https://github.com/JB1905/universal-tilt.js#settings)
**methods** | object | `{}` | [Default universal-tilt.js methods](https://github.com/JB1905/universal-tilt.js#methods) | [universal-tilt.js settings](https://github.com/JB1905/universal-tilt.js#methods)
**style** | object | `{}` | CSS styles for tilt element | CSS styles
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

        methods={{
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
