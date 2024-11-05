import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Heading extends Component {
  static Badge = ({ type, text }) => (
    <span className={`badge badge-${type}`}>
      {text}
    </span>
  );

  render() {
    const { children, ...props } = this.props;
    return (
      <div {...props}>
        {children}
      </div>
    );
  }
}

Heading.propTypes = {
  children: PropTypes.node,
};

Heading.Badge.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Heading;