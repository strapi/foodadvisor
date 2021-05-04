/**
 *
 * Informations
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';

import {
  restaurantDefaultShape,
  restaurantShape,
} from '../../shapes/restaurant';

import H1 from '../H1';
import NotePaper from '../NotePaper';
import OpeningHours from '../OpeningHours';
import Grid from '../Grid';

/* eslint-disable camelcase */
function Informations({
  restaurant: {
    address,
    category,
    district,
    opening_hours,
    phone,
    website,
    description,
  },
}) {
  const infos = [
    {
      type: 'list',
      title: 'Details',
      infos: [
        { subtitle: 'Cooking', text: category.name },
        {
          subtitle: 'Neighborhood',
          text: district.includes('_') ? district.replace('_', '') : district,
        },
      ],
    },
    {
      type: 'list',
      title: 'Location',
      infos: [
        {
          subtitle: address,
          multipleLine: true,
        },
        { subtitle: 'Website', text: website },
        { subtitle: 'Phone number', text: phone },
      ],
    },
  ];

  return (
    <>
      <H1>Informations</H1>
      <p className="description">{description}</p>
      <Grid>
        <li className="column informations-card">
          <OpeningHours openingHours={opening_hours} />
        </li>
        {infos.map(info => (
          <li key={info.title} className="column informations-card">
            <NotePaper informations={info} />
          </li>
        ))}
      </Grid>
    </>
  );
}

Informations.defaultProps = {
  restaurant: restaurantDefaultShape,
};

Informations.propTypes = {
  ...restaurantShape,
};

export default Informations;
