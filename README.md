# react-outsideclick

Captures clicks outside of a react component. Exports a commonjs module that can be used with webpack or browserify. Source is in es6 but a es5 version can be found in the `dist/` directory

## Usage with Babel/Webpack

```js
import React from 'react';
import OutsideClick from 'react-outsideclick';

export default class Dialog extends React.Component {
  render() {
    return (
      <div className='dialog'>
        /**
         * Any clicks within this component are ignored. Only clicks outside of it are triggered.
         */
        <OutsideClick
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

```
