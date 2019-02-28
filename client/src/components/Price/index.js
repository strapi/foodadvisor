/**
 *
 * Price
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

/* istanbul ignore next */
function Price(props) {
  return (
    <span>
      {Array(props.value)
        .fill(1)
        .map(() => '€')}
    </span>
  );
}

Price.defaultProps = {
  value: 1
};

Price.propTypes = {
  value: PropTypes.oneOf([1, 2, 3, 4])
};

export default Price;
