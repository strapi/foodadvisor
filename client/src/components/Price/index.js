/**
 *
 * Price
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

/* istanbul ignore next */
function Price({ value }) {
  const formattedValue = value ? value.replace('_', '') : 1;

  return (
    <span>
      {Array(parseInt(formattedValue, 10))
        .fill(1)
        .map(() => '€')}
    </span>
  );
}

Price.defaultProps = {
  value: '_1'
};

Price.propTypes = {
  value: PropTypes.oneOf(['_1', '_2', '_3', '_4'])
};

export default Price;
