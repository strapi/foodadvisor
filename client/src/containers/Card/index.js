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
  const { name, price, district, cover, note } = props.restaurant;

  return (
    <StyledCard>
      <div className="img-wrapper">
        {cover.length && (
          <Img
            type="article"
            src={`${process.env.REACT_APP_BACKEND_URL}${cover[0].url}`}
            alt="cover"
          />
        )}
      </div>
      <H4>{name}</H4>
      <p className="description">
        <Price value={price} />
        &nbsp;•&nbsp;
        <span>{note}</span>
        &nbsp;•&nbsp;
        <span>{district}</span>
      </p>

      <Rate value={Math.floor(note)} />
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
