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
      <CardSection restaurant={props.restaurant} />
    </StyledCard>
  );
}

Card.defaultProps = {
  restaurant: {
    category: { name: '' },
    cover: [],
    name: null,
    reviews: []
  }
};

Card.propTypes = {
  restaurant: PropTypes.object
};

export default Card;
