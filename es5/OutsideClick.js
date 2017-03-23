/*!
 *        .__    .__                                                                          __                                  __         .__    .___            .__  .__        __    
 *   _____|  |__ |__|_____             ____  ____   _____ ______   ____   ____   ____   _____/  |_  ______           ____  __ ___/  |_  _____|__| __| _/____   ____ |  | |__| ____ |  | __
 *  /  ___/  |  \|  \____ \   ______ _/ ___\/  _ \ /     \\____ \ /  _ \ /    \_/ __ \ /    \   __\/  ___/  ______  /  _ \|  |  \   __\/  ___/  |/ __ |/ __ \_/ ___\|  | |  |/ ___\|  |/ /
 *  \___ \|   Y  \  |  |_> > /_____/ \  \__(  <_> )  Y Y  \  |_> >  <_> )   |  \  ___/|   |  \  |  \___ \  /_____/ (  <_> )  |  /|  |  \___ \|  / /_/ \  ___/\  \___|  |_|  \  \___|    < 
 * /____  >___|  /__|   __/           \___  >____/|__|_|  /   __/ \____/|___|  /\___  >___|  /__| /____  >          \____/|____/ |__| /____  >__\____ |\___  >\___  >____/__|\___  >__|_ \
 *      \/     \/   |__|                  \/            \/|__|               \/     \/     \/          \/                                  \/        \/    \/     \/             \/     \/
 * ship-components-outsideclick 0.2.0
 * Description: React component to detect clicks outside of its children
 * Author: Isaac Suttell <isaac@isaacsuttell.com>
 * Homepage: https://github.com/ship-components/ship-components-outsideclick#readme
 * Bugs: https://github.com/ship-components/ship-components-outsideclick/issues
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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OutsideClick = function (_React$Component) {
	  _inherits(OutsideClick, _React$Component);

	  /**
	   * @class OutsideClick keeps track of clicks outside of the component. This is used for Dialogs, select boxes, etc.
	   * @author Isaac Suttell <isaac@isaacsuttell.com>
	   */
	  function OutsideClick(props) {
	    _classCallCheck(this, OutsideClick);

	    // Ensure the right context
	    var _this = _possibleConstructorReturn(this, (OutsideClick.__proto__ || Object.getPrototypeOf(OutsideClick)).call(this, props));

	    _this.handleBodyClick = _this.handleBodyClick.bind(_this);
	    return _this;
	  }

	  /**
	   * Bind to the body so we can check for clicks outside of the component
	   */


	  _createClass(OutsideClick, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.onClick) {
	        document.body.addEventListener('click', this.handleBodyClick);
	      }

	      if (this.props.onContextMenu) {
	        document.body.addEventListener('contextmenu', this.handleBodyClick);
	      }

	      if (this.props.onMouseDown) {
	        document.body.addEventListener('mousedown', this.handleBodyClick);
	      }

	      if (this.props.onMouseUp) {
	        document.body.addEventListener('mouseup', this.handleBodyClick);
	      }
	    }

	    /**
	     * Clean up
	     */

	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      document.body.removeEventListener('click', this.handleBodyClick);
	      document.body.removeEventListener('contextmenu', this.handleBodyClick);
	      document.body.removeEventListener('mousedown', this.handleBodyClick);
	      document.body.removeEventListener('mouseup', this.handleBodyClick);
	    }

	    /**
	     * Handle clicks outside of the component. Goes up the tree until it finds itself or runs out of parents.
	     * @param     {Event}    event
	     */

	  }, {
	    key: 'handleBodyClick',
	    value: function handleBodyClick(event) {
	      var source = event.target;
	      var el = _reactDom2.default.findDOMNode(this);

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
	      return _react2.default.createElement(
	        this.props.tag,
	        {
	          className: this.props.className },
	        this.props.children
	      );
	    }
	  }]);

	  return OutsideClick;
	}(_react2.default.Component);

	/**
	 * Set some defaults
	 * @static
	 * @type    {Object}
	 */


	exports.default = OutsideClick;
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
	  tag: _react2.default.PropTypes.string,
	  className: _react2.default.PropTypes.string,
	  onClick: _react2.default.PropTypes.func,
	  onMouseDown: _react2.default.PropTypes.func,
	  onMouseUp: _react2.default.PropTypes.func
	};

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