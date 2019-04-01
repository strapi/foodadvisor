/**
 *
 * StyledImg
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

StyledImg.defaultProps = {
  src: ''
};

StyledImg.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default StyledImg;
