/**
 *
 * StyledRadio
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledRadio = styled.input`
  display: none;
`;

StyledRadio.defaultProps = {
  type: 'radio'
};

StyledRadio.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired
};

export default StyledRadio;
