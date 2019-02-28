/**
 *
 * Card
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledCard from './StyledCard';
import H4 from '../../components/H4';
import Img from '../../components/Img';
import Price from '../../components/Price';

function Card(props) {
  const { restaurant } = props;

  return (
    <StyledCard>
      <div className="img-wrapper">
        {restaurant.cover.length && (
          <Img
            type="article"
            src={`${process.env.REACT_APP_BACKEND_URL}${
              restaurant.cover[0].url
            }`}
            alt="cover"
          />
        )}
      </div>
      <H4>{restaurant.name}</H4>
      <p className="description">
        <Price value={restaurant.price} />
        &nbsp;•&nbsp;
        <span>{restaurant.price}</span>
        &nbsp;•&nbsp;
        <span>{restaurant.district}</span>
      </p>
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
