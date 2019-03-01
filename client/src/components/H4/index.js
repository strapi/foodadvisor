/**
 *
 * H4
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledH4 from './StyledH4';

function H4({ children, message, ...rest }) {
  const content = (() => {
    if (message) {
      return message;
    }

    return children;
  })();

  return <StyledH4 {...rest}>{content}</StyledH4>;
}

H4.defaultProps = {
  children: null,
  message: null
};

H4.propTypes = {
  children: PropTypes.node,
  message: PropTypes.string
};

export default H4;
