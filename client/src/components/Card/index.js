/**
 *
 * Card
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledCard from './StyledCard';
import CardSection from '../CardSection';
import Img from '../Img';

function Card(props) {
  const {
    restaurant: { id, cover },
    onClick
  } = props;

  return (
    <StyledCard onClick={() => onClick(id)} className="clickable-card">
      <div className="img-wrapper">
        {cover.length ? (
          <Img
            src={`${process.env.REACT_APP_BACKEND_URL}${cover[0].url}`}
            alt="cover"
          />
        ) : (
          <Img alt="cover" />
        )}
      </div>
      <CardSection restaurant={props.restaurant} />
    </StyledCard>
  );
}

Card.defaultProps = {
  restaurant: {
    cover: []
  }
};

Card.propTypes = {
  restaurant: PropTypes.object
};

export default Card;
