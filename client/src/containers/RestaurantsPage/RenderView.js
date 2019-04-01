import React from 'react';
import PropTypes from 'prop-types';

import Paging from '../../components/Paging';
import Grid from '../../components/Grid';
import Card from '../../components/Card';
import H1 from '../../components/H1';
import Img from '../../components/Img';

import img from '../../assets/img/ooops.png';

const RenderView = ({
  onClick,
  onPagingChange,
  restaurants,
  rest : { restaurantsConnection : { aggregate : { count } } },
  start,
  range
}) => {

  const renderPagination = () => {
    return (
      <Paging
        onChange={onPagingChange}
        count={count}
        range={range}
        page={start}
      />
    );
  };

  return (
    <div className="restaurants-wrapper">
      <H1>Best restaurants in Paris</H1>
      <Grid>
        {restaurants.map(restaurant => (
          <li className="column" key={restaurant.id}>
            <Card
              key={restaurant.id}
              restaurant={restaurant}
              onClick={onClick}
            />
          </li>
        ))}
      </Grid>
      {count > range && renderPagination()}
      {restaurants.length < 1 && (
        <div className="ooops-wrapper">
          <div className="ooops-img">
            <Img src={img} alt="oops" />
          </div>
          <p className="ooops-title">Ooops!</p>
          <p className="ooops-text">
            Seems like there are no restaurants matchings thoses filters.
          </p>
        </div>
      )}
    </div>
  );
};

RenderView.defaultProps = {
  onClick: () => {},
  onPagingChange: () => {},
  range: 0,
  restaurants: [],
  rest: {},
  start: 0
};

RenderView.propTypes = {
  onClick: PropTypes.func,
  onPagingChange: PropTypes.func,
  range: PropTypes.number,
  restaurants: PropTypes.array,
  rest: PropTypes.object,
  start: PropTypes.number
};

export default RenderView;
