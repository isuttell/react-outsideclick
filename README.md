# react-outsideclick
Captures clicks outside of a react component. Exports a commonjs module that can be used with [webpack](http://webpack.github.io/) or browserify. Source is in ES6 but a [babelify](https://babeljs.io/) ES5 version can be found in the `dist/` directory.

[![Build Status](http://img.shields.io/travis/isuttell/react-outsideclick/master.svg?style=flat)](https://travis-ci.org/isuttell/react-outsideclick)

## Usage with Babel/Webpack

```js
import React from 'react';
import OutsideClick from 'react-outsideclick';

export default class Dialog extends React.Component {
  render() {
    return (
      <div className='dialog--overlay'>
        /**
         * Any clicks within this component are ignored. Only clicks outside of it are triggered.
         */
        <OutsideClick
          tag='div'
          className='dialog--container'
          onClick={this.props.onCancel}
        >
          <div className='dialog--body'>
            Hello World
          </div>
        </OutsideClick>
      </div>
    );
  }
}
```

## License
The MIT License (MIT)

Copyright (c) 2015 Isaac Suttell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
