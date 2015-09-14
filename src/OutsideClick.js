import React from 'react';

export default class OutsideClick extends React.Component {
  constructor(props) {
    super(props)
    this.handleBodyClick = this.handleBodyClick.bind(this);
  }

  /**
   * Bind to the body so we can check for clicks outside of the Selector
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
   * Handle clicks outside of the Selector
   *
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
   * Render
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
 * Validate the prop types
 * @static
 * @type    {Object}
 */
OutsideClick.propTypes = {
  className: React.PropTypes.string,
  onClick: React.PropTypes.func
};
