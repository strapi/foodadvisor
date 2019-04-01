import PropTypes from 'prop-types';

import { categoryDefaultShape, categoryShape } from './category';
import { reviewDefaultShape, reviewShape } from './review';

const restaurantDefaultShape = {
  category: categoryDefaultShape,
  cover: [],
  description: null,
  district: '_1st',
  id: null,
  name: null,
  note: null,
  opening_hours: null,
  price: null,
  reviews: [reviewDefaultShape],
  __typename: 'Restaurant',
};

const restaurantShape = {
  category: PropTypes.shape(categoryShape),
  cover: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      __typename: PropTypes.string,
    }),
  ),
  description: PropTypes.string,
  district: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  note: PropTypes.number,
  opening_hours: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.shape({
      subtitle: PropTypes.string,
      text: PropTypes.string,
    })),
  ]),
  price: PropTypes.string,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewShape)),
  __typename: PropTypes.string,
};

export { restaurantDefaultShape, restaurantShape };
