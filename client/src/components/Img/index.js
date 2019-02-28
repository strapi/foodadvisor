/**
 *
 * Img
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledImg from './StyledImg';

function Img({ alt, src, type, ...rest }) {
  const cleanedProps = rest;
  delete cleanedProps.srcset;

  return <StyledImg alt={alt} src={src} type={type} {...cleanedProps} />;
}

Img.defaultProps = {
  src: '',
  type: 'article'
};

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.oneOf(['article', 'slide', 'avatar'])
};

export default Img;
