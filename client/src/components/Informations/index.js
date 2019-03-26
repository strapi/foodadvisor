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
import Grid from '../Grid';

function Informations({ restaurant }) {
  const {
    address,
    category,
    district,
    opening_hours,
    phone,
    website,
  } = restaurant;
  const infos = [
    {
      type: 'html',
      title: 'Opening hours',
      infos: opening_hours,
    },
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
      <Grid>
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
