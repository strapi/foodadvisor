/**
 *
 * Img
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledImg from './StyledImg';

function Img({ alt, src, ...rest }) {
  const cleanedProps = rest;
  delete cleanedProps.srcset;

  return <StyledImg alt={alt} src={src} {...cleanedProps} />;
}

Img.defaultProps = {
  src: ''
};

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default Img;
