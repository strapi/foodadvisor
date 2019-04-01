/**
 *
 * Card
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  restaurantDefaultShape,
  restaurantShape,
} from '../../shapes/restaurant';

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
          src={`${process.env.REACT_APP_BACKEND_URL}${coverURL}`}
          alt="cover"
        />
      </div>
      <CardSection restaurant={restaurant} />
    </StyledCard>
  );
}

Card.defaultProps = {
  ...restaurantDefaultShape,
};

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  ...restaurantShape,
};

export default Card;
