/**
 *
 * OpeningHours
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import H4 from '../H4';
import StyledNotePaper from '../NotePaper/StyledNotePaper';

function OpeningHourss({ openingHours }) {
  return (
    <StyledNotePaper>
      <H4>
        <span title="Opening Hours">Opening Hours</span>
      </H4>
      <ul>
        {openingHours.map(openingHour => (
          <li key={openingHour.id}>
            <p>{openingHour.day_interval}</p>
            <p>
              {openingHour.opening_hour}
              {openingHour.closing_hour ? ` - ${openingHour.closing_hour}` : ''}
            </p>
          </li>
        ))}
      </ul>
    </StyledNotePaper>
  );
}

OpeningHourss.defaultProps = {
  openingHours: [],
};

OpeningHourss.propTypes = {
  openingHours: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      day_interval: PropTypes.string.required,
      opening_hour: PropTypes.string,
      closing_hour: PropTypes.string,
    }),
  ),
};

export default OpeningHourss;
