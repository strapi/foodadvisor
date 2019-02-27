/**
 *
 * H1
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledH1 from './StyledH1';

function H1(props) {
  const content = (() => {
    if (props.message) {
      return props.message;
    }

    return props.children;
  })();

  return <StyledH1>{content}</StyledH1>;
}

H1.defaultProps = {
  children: null,
  message: null
};

H1.propTypes = {
  children: PropTypes.node,
  message: PropTypes.string
};

export default H1;
