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
import Rate from '../../components/Rate';

function Card(props) {
  const {
    restaurant: { name, price, district, id, cover, note, reviews, category },
    onClick
  } = props;

  return (
    <StyledCard onClick={() => onClick(id)}>
      <div className="img-wrapper">
        {cover.length && (
          <Img
            type="article"
            src={`${process.env.REACT_APP_BACKEND_URL}${cover[0].url}`}
            alt="cover"
          />
        )}
      </div>
      <div className="card-infos">
        <div className="left-infos">
          <H4>{name}</H4>
          <p className="description">
            <Price value={price} />
            &nbsp;•&nbsp;
            <span>{category}</span>
            &nbsp;•&nbsp;
            <span>{district}</span>
          </p>
        </div>
        <div className="right-infos">
          <Rate value={Math.floor(note)} clickable={false} />
          <p>{reviews.length}&nbsp;reviews</p>
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
