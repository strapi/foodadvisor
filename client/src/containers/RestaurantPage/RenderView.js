import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../../components/Grid';
import CardSection from '../../components/CardSection';
import Slider from '../../components/Slider';
import Tabs from '../../components/Tabs';

const RenderView = ({ 
  restaurant, 
  rest 
}) => {
  const { cover } = restaurant;
  const {
    reviewsConnection: {
      aggregate: { count }
    }
  } = rest;

  return (
    <div>
      <div className="intro-wrapper">
        <Grid>
          <li className="column">
            <CardSection
              restaurant={{ ...restaurant }}
              hasLink
            />
          </li>
        </Grid>
      </div>
      <div className="slider-wrapper">
        <Slider slides={cover} />
      </div>
      <div className="informations-wrapper">
        <Tabs restaurant={{ ...restaurant, count }} />
      </div>
    </div>
  );
};

RenderView.defaultProps = {
  restaurant: {
    cover: [],
    district: null,
    price: null,
  }
};

RenderView.propTypes = {
  restaurant: PropTypes.shape({
    cover: PropTypes.array,
    district: PropTypes.string,
    price: PropTypes.string
  })
};

export default RenderView;
