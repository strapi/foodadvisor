/**
 *
 * NotePaper
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import H4 from '../H4';
import StyledNotePaper from './StyledNotePaper';

function NotePaper(props) {
  const {
    informations: { title, infos }
  } = props;

  return (
    <StyledNotePaper>
      <H4>{title}</H4>
      <ul>
        {infos.map(info => (
          <li key={info.subtitle}>
            <p>{info.subtitle}</p>
            <p>{info.text}</p>
          </li>
        ))}
      </ul>
    </StyledNotePaper>
  );
}

NotePaper.defaultProps = {
  informations: {
    title: null,
    infos: {
      subtitle: null,
      text: null
    }
  }
};

NotePaper.propTypes = {
  informations: PropTypes.object
};

export default NotePaper;
