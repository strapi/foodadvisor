/**
 *
 * Card
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledCard from './StyledCard';
import H4 from '../H4';
import Img from '../Img';
import Price from '../Price';
import Rate from '../Rate';

function Card(props) {
  const {
    restaurant: { name, price, district, id, cover, note, reviews, category },
    onClick
  } = props;
  const coverURL = cover[0] ? cover[0].url : '';

  return (
    <StyledCard onClick={() => onClick(id)}>
      <div className="img-wrapper">
        <Img
          type="article"
          src={`${process.env.REACT_APP_BACKEND_URL}${coverURL}`}
          alt="cover"
        />
      </div>
      <div className="card-infos">
        <div className="left-infos">
          <H4>{name}</H4>
          <p className="description">
            <Price value={price} />
            &nbsp;•&nbsp;
            <span id="category-name">{category && category.name}</span>
            &nbsp;•&nbsp;
            <span>{district}</span>
          </p>
        </div>
        <div className="right-infos">
          <Rate value={note} clickable={false} />
          <p>{reviews ? reviews.length : 0}&nbsp;reviews</p>
        </div>
      </div>
    </StyledCard>
  );
}

Card.defaultProps = {
  restaurant: {
    name: null,
    cover: [],
    reviews: []
  }
};

Card.propTypes = {
  restaurant: PropTypes.object
};

export default Card;
