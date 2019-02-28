/**
 *
 * Nav
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from './StyledLink';

function Link(props) {
  const content = (() => {
    if (props.message) {
      return props.message;
    }

    return props.children;
  })();

  return <StyledLink to={props.url}>{content}</StyledLink>;
}

Link.defaultProps = {
  children: null,
  message: null,
  url: '#'
};

Link.propTypes = {
  children: PropTypes.node,
  url: PropTypes.string,
  message: PropTypes.string
};

export default Link;
