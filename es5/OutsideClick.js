/*!
 *                               __                           __         .__    .___            .__  .__        __    
 * _______   ____ _____    _____/  |_            ____  __ ___/  |_  _____|__| __| _/____   ____ |  | |__| ____ |  | __
 * \_  __ \_/ __ \\__  \ _/ ___\   __\  ______  /  _ \|  |  \   __\/  ___/  |/ __ |/ __ \_/ ___\|  | |  |/ ___\|  |/ /
 *  |  | \/\  ___/ / __ \\  \___|  |   /_____/ (  <_> )  |  /|  |  \___ \|  / /_/ \  ___/\  \___|  |_|  \  \___|    < 
 *  |__|    \___  >____  /\___  >__|            \____/|____/ |__| /____  >__\____ |\___  >\___  >____/__|\___  >__|_ \
 *              \/     \/     \/                                       \/        \/    \/     \/             \/     \/
 * react-outsideclick 0.1.0
 * Description: React component to detect clicks outside of its children
 * Author: Isaac Suttell
 * Homepage: https://github.com/isuttell/react-outsideclick#readme
 * Bugs: https://github.com/isuttell/react-outsideclick/issues
 * License: MIT
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var OutsideClick = (function (_React$Component) {
	  _inherits(OutsideClick, _React$Component);

	  /**
	   * @class OutsideClick keeps track of clicks outside of the component. This is used for Dialogs, select boxes, etc.
	   * @author Isaac Suttell <isaac@isaacsuttell.com>
	   */

	  function OutsideClick(props) {
	    _classCallCheck(this, OutsideClick);

	    _get(Object.getPrototypeOf(OutsideClick.prototype), 'constructor', this).call(this, props);

	    // Ensure the right context
	    this.handleBodyClick = this.handleBodyClick.bind(this);
	  }

	  /**
	   * Set some defaults
	   * @static
	   * @type    {Object}
	   */

	  /**
	   * Bind to the body so we can check for clicks outside of the component
	   */

	  _createClass(OutsideClick, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var el = this.getBody();

	      if (this.props.onClick) {
	        el.addEventListener('click', this.handleBodyClick);
	      }

	      if (this.props.onContextMenu) {
	        el.addEventListener('contextmenu', this.handleBodyClick);
	      }

	      if (this.props.onMouseDown) {
	        el.addEventListener('mousedown', this.handleBodyClick);
	      }

	      if (this.props.onMouseUp) {
	        el.addEventListener('mouseup', this.handleBodyClick);
	      }
	    }

	    /**
	     * Clean up
	     */
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var el = this.getBody();
	      el.removeEventListener('click', this.handleBodyClick);
	      el.removeEventListener('contextmenu', this.handleBodyClick);
	      el.removeEventListener('mousedown', this.handleBodyClick);
	      el.removeEventListener('mouseup', this.handleBodyClick);
	    }
	  }, {
	    key: 'getBody',
	    value: function getBody() {
	      var source = _reactDom2['default'].findDOMNode(this);
	      while (source.parentNode) {
	        if (source.parentNode) {
	          source = source.parentNode;
	        } else {
	          break;
	        }
	      }
	      return source.body;
	    }

	    /**
	     * Handle clicks outside of the component. Goes up the tree until it finds itself or runs out of parents.
	     * @param     {Event}    event
	     */
	  }, {
	    key: 'handleBodyClick',
	    value: function handleBodyClick(event) {
	      var source = event.target;
	      var el = _reactDom2['default'].findDOMNode(this);

	      // Search up the tree for the component node
	      while (source.parentNode) {
	        if (source === el) {
	          return;
	        } else {
	          source = source.parentNode;
	        }
	      }

	      if (this.props.onMouseDown) {
	        this.props.onMouseDown(event);
	      }

	      if (this.props.onClick) {
	        this.props.onClick(event);
	      }

	      if (this.props.onMouseUp) {
	        this.props.onMouseUp(event);
	      }
	    }

	    /**
	     * Render the react component
	     * @return    {React}
	     */
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        this.props.tag,
	        {
	          className: this.props.className },
	        this.props.children
	      );
	    }
	  }]);

	  return OutsideClick;
	})(_react2['default'].Component);

	exports['default'] = OutsideClick;
	OutsideClick.defaultProps = {
	  tag: 'div',
	  className: ''
	};

	/**
	 * Validate the prop types when not in production
	 * @static
	 * @type    {Object}
	 */
	OutsideClick.propTypes = {
	  tag: _react2['default'].PropTypes.string,
	  className: _react2['default'].PropTypes.string,
	  onClick: _react2['default'].PropTypes.func,
	  onMouseDown: _react2['default'].PropTypes.func,
	  onMouseUp: _react2['default'].PropTypes.func
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ }
/******/ ]);