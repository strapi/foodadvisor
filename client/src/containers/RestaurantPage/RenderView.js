import React from 'react';
import PropTypes from 'prop-types';

import Slider from '../../components/Slider';

const RenderView = ({ restaurant }) => {
  const { cover } = restaurant;

  return (
    <div>
      {restaurant.name}
      <div className="slider-wrapper">
        <Slider slides={cover} />
      </div>
    </div>
  );
};

RenderView.defaultProps = {
  restaurant: {
    name: null,
    cover: []
  }
};

RenderView.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    cover: PropTypes.array
  })
};

export default RenderView;
