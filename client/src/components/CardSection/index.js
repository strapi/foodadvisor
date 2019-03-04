/**
 *
 * CardSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import H1 from '../H1';
import H4 from '../H4';
import Price from '../Price';
import Rate from '../Rate';

import StyledCardSection from './StyledCardSection';

function CardSection(props) {
  const {
    restaurant: { name, price, district, note, reviews, category },
    link
  } = props;

  return (
    <StyledCardSection className={link && 'banner'}>
      <div className="left-infos">
        {!link ? <H4>{name}</H4> : <H1>{name}</H1>}
        <p className="description">
          <Price value={price} />
          {category && <span>&nbsp;•&nbsp;{category.name}</span>}
          <span>&nbsp;•&nbsp;{district}</span>
        </p>
      </div>
      <div className="right-infos">
        <Rate value={Math.floor(note)} clickable={false} />
        {!link ? (
          <p>{reviews.length}&nbsp;reviews</p>
        ) : (
          <div className="link-wrapper">
            <a className="link">
              <p>See all reviews</p>
            </a>
          </div>
        )}
      </div>
    </StyledCardSection>
  );
}

CardSection.defaultProps = {
  restaurant: {
    name: null,
    price: null,
    district: null,
    note: null,
    reviews: [],
    category: null
  },
  link: false
};

CardSection.propTypes = {
  restaurant: PropTypes.object,
  link: PropTypes.bool
};

export default CardSection;
