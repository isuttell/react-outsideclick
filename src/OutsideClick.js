import React from 'react';
import ReactDOM from 'react-dom';

export default class OutsideClick extends React.Component {
  /**
   * @class OutsideClick keeps track of clicks outside of the component. This is used for Dialogs, select boxes, etc.
   * @author Isaac Suttell <isaac@isaacsuttell.com>
   */
  constructor(props) {
    super(props);

    // Ensure the right context
    this.handleBodyClick = this.handleBodyClick.bind(this);
  }

  getBody() {
    let source = ReactDOM.findDOMNode(this);
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
   * Bind to the body so we can check for clicks outside of the component
   */
  componentDidMount() {
    let el = this.getBody();

    if (this.props.onClick) {
      el.addEventListener('click', this.handleBodyClick);
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
  componentWillUnmount() {
    let el = this.getBody();
    el.removeEventListener('click', this.handleBodyClick);
    el.removeEventListener('mousedown', this.handleBodyClick);
    el.removeEventListener('mouseup', this.handleBodyClick);
  }

  /**
   * Handle clicks outside of the component. Goes up the tree until it finds itself or runs out of parents.
   * @param     {Event}    event
   */
  handleBodyClick(event) {
    let source = event.target;
    let el = ReactDOM.findDOMNode(this);

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
  render() {
    return (
      <this.props.tag
        className={this.props.className} >
        {this.props.children}
      </this.props.tag>
    );
  }
}

/**
 * Set some defaults
 * @static
 * @type    {Object}
 */
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
  tag: React.PropTypes.string,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func,
  onMouseDown: React.PropTypes.func,
  onMouseUp: React.PropTypes.func
};
