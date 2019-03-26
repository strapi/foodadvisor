import PropTypes from 'prop-types';

const categoryDefaultShape = {
  name: null,
  __typename: 'UploadFile',
};

const categoryShape = {
  name: PropTypes.string,
  __typename: PropTypes.string,
};

export { categoryDefaultShape, categoryShape };
