/**
 *
 * Img
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledImg from './StyledImg';

function Img(props) {
  return <StyledImg src={`${props.src}`} alt={props.alt} type={props.type} />;
}

Img.defaultProps = {
  src: ``,
  alt: '',
  type: 'article'
};

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.oneOf(['article', 'slide', 'avatar'])
};

export default Img;
