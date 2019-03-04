import React from 'react';
import PropTypes from 'prop-types';

import Slider from '../../components/Slider';

const RenderView = ({ restaurant: { cover, name } }) => {
  return (
    <div>
      {name}
      <div className="slider-wrapper">
        <Slider slides={cover} />
      </div>
    </div>
  );
};

RenderView.defaultProps = {
  restaurant: {
    cover: [],
    name: null
  }
};

RenderView.propTypes = {
  restaurant: PropTypes.shape({
    cover: PropTypes.array,
    name: PropTypes.string
  })
};

export default RenderView;
