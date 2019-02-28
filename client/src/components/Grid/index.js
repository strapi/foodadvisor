/**
 *
 * Grid
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledGrid from './StyledGrid';

function Grid(props) {
  return <StyledGrid>{props.children}</StyledGrid>;
}

Grid.defaultProps = {
  children: null
};
Grid.propTypes = {
  children: PropTypes.node
};

export default Grid;
