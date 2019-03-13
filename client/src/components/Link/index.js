/**
 *
 * Nav
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from './StyledLink';

function Link({ active, children, url }) {
  return (
    <StyledLink className={active && 'active'} to={url}>
      {children}
    </StyledLink>
  );
}

Link.defaultProps = {
  active: null,
  children: null,
  url: '#'
};

Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  url: PropTypes.string
};

export default Link;
