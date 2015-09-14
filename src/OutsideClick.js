import React from 'react';

export default class OutsideClick extends React.Component {
  /**
   * @class OutsideClick keeps track of clicks outside of the component. This is used for Dialogs, select boxes, etc.
   * @author Isaac Suttell <isaac@isaacsuttell.com>
   */
  constructor(props) {
    super(props)

    // Ensure the right context
    this.handleBodyClick = this.handleBodyClick.bind(this);
  }

  /**
   * Bind to the body so we can check for clicks outside of the component
   */
  componentDidMount() {
    document.body.addEventListener('click', this.handleBodyClick);
  }

  /**
   * Clean up
   */
  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleBodyClick);
  }

  /**
   * Handle clicks outside of the component. Goes up the tree until it finds itself or runs out of parents.
   * @param     {Event}    event
   */
  handleBodyClick(event) {
    var source = event.target;
    var el = React.findDOMNode(this);

    // Search up the tree for the component node
    while (source.parentNode) {
      if (source === el) {
        return;
      } else {
        source = source.parentNode;
      }
    }

    this.props.onClick(event);
  }

  /**
   * Render the react component
   * @return    {React}
   */
  render() {
    return (
      <this.props.tag
        className={this.props.className}
      >
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
  className: '',
  onClick: function() {}
};

/**
 * Validate the prop types when not in production
 * @static
 * @type    {Object}
 */
OutsideClick.propTypes = {
  tag: React.PropTypes.string,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func
};
