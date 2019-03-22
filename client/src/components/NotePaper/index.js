/**
 *
 * NotePaper
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import H4 from '../H4';
import StyledNotePaper from './StyledNotePaper';

function NotePaper({ informations }) {
  const { title, infos, type } = informations;
  return (
    <StyledNotePaper>
      <H4>{title}</H4>

      {type === 'list' && (
        <ul>
          {infos.map(info => (
            <li key={info.subtitle}>
              <p>{info.subtitle}</p>
              <p>{info.text}</p>
            </li>
          ))}
        </ul>
      )}
      {type === 'html' && (
        <div
          dangerouslySetInnerHTML={{
            __html: '<li><p>Tue - Sat</p><p>7:30 PM - 10:00 PM</p></li>'
          }}
        />
      )}
    </StyledNotePaper>
  );
}

NotePaper.defaultProps = {
  informations: {
    title: null,
    infos: {
      subtitle: null,
      text: null
    },
    type: null
  }
};

NotePaper.propTypes = {
  informations: PropTypes.object
};

export default NotePaper;
