/**
 *
 * Rate
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Rate(props) {
  return <div>{props.value}</div>;
}

Rate.defaultProps = {
  value: 1
};

Rate.propTypes = {
  value: PropTypes.oneOf([1, 2, 3, 4])
};

export default Rate;
