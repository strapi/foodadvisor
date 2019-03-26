import PropTypes from 'prop-types';

const inputDefaultShape = {
  autoFocus: false,
  id: null,
  onChange: () => {},
  placeholder: null,
  tabIndex: '0',
  value: null,
};

const inputShape = {
  autoFocus: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  value: PropTypes.string,
};

export { inputDefaultShape, inputShape };
