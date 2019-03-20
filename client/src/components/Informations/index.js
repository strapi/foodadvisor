/**
 *
 * Informations
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';

import H1 from '../H1';
import NotePaper from '../NotePaper';
import Grid from '../Grid';

// TO DO - Replace with real data when available
const infos = [
  {
    title: 'Opening hours',
    infos: [
      { subtitle: 'Mondays', text: 'Closed' },
      { subtitle: 'Tuesday to Friday', text: '11am - 3pm / 5pm - 2am' },
      { subtitle: 'Weekends', text: '5pm - 2am' }
    ]
  },
  {
    title: 'Details',
    infos: [
      { subtitle: 'Cooking', text: 'Italian food' },
      { subtitle: 'Specific diets', text: 'Vegan, vegetarians, no gluten' },
      { subtitle: 'Meals', text: 'Lunch and dinner' }
    ]
  },
  {
    title: 'Location',
    infos: [
      {
        subtitle: '107 Boulevard Richard Lenoir 75011 Paris',
        multipleLine: true
      },
      { subtitle: 'Website', text: 'http://obermama.com' },
      { subtitle: 'Phone number', text: '+331 58 30 62 78' }
    ]
  }
];

function Informations({ address, opening_hours, phone, website }) {
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

Informations.defaultProps = {};

Informations.propTypes = {};

export default Informations;
