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

function Card({ restaurant, onClick }) {
  const { id, cover } = restaurant;
  const coverURL = cover[0] ? cover[0].url : '';

  return (
    <StyledCard onClick={() => onClick(id)} className="clickable-card">
      <div className="img-wrapper">
        <Img
          type="article"
          src={`${process.env.REACT_APP_BACKEND_URL}${coverURL}`}
          alt="cover"
        />
      </div>
      <CardSection restaurant={restaurant} />
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
