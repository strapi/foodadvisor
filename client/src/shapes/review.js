import PropTypes from 'prop-types';

const reviewShape = {
  content: PropTypes.string,
  note: PropTypes.number,
  __typename: PropTypes.string,
};

const reviewDefaultShape = {
  content: null,
  note: null,
  __typename: null,
};

export { reviewDefaultShape, reviewShape };
