import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../../components/Grid';
import CardSection from '../../components/CardSection';
import Slider from '../../components/Slider';
import Tabs from '../../components/Tabs';

const RenderView = ({ restaurant, rest, history }) => {
  const { cover } = restaurant;
  const {
    reviewsConnection: {
      aggregate: { count }
    }
  } = rest;

  const tabs = [
    {
      id: 1,
      name: 'informations'
    },
    {
      id: 2,
      name: 'reviews'
    }
  ];

  const getCurrentContainer = () =>
    tabs.find(
      i =>
        i.name ===
        history.location.pathname
          .split('/')
          .pop()
          .trim()
    ).id;

  const toggle = tab => {
    if (getCurrentContainer() !== tab) {
      const { id } = restaurant;
      const currTab = tabs.find(i => i.id === tab);
      history.push(`/${id}/${currTab.name}`);
    }
  };

  return (
    <div>
      <div className="intro-wrapper">
        <Grid>
          <li className="column">
            <CardSection
              restaurant={{ ...restaurant }}
              hasLink
              history={history}
            />
          </li>
        </Grid>
      </div>
      <div className="slider-wrapper">
        <Slider slides={cover} />
      </div>
      <div className="informations-wrapper">
        <Tabs
          restaurant={{ ...restaurant, count }}
          history={history}
          toggleTab={toggle}
          selected={getCurrentContainer()}
        />
      </div>
    </div>
  );
};

RenderView.defaultProps = {
  restaurant: {
    cover: [],
    district: null,
    price: null
  }
};

RenderView.propTypes = {
  restaurant: PropTypes.shape({
    cover: PropTypes.array,
    district: PropTypes.string,
    price: PropTypes.string
  }),
  history: PropTypes.object.isRequired
};

export default RenderView;
