/**
 *
 * StyledImg
 *
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import sizes from '../../assets/styles/sizes';

const StyledImg = styled.img`
  // General style
  width: 100%;
  height: 100%;
  object-fit: cover;

  // Article size
  ${props =>
    props.type === 'article' &&
    css`
      max-height: ${sizes.article.img.height};
      min-height: ${sizes.article.img.height};
    `}}
`;

StyledImg.defaultProps = {
  type: 'article',
  src: ''
};

StyledImg.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  // TODO: I would prefer having a size prop instead of a type one
  type: PropTypes.oneOf(['article', 'slide', 'avatar'])
};

export default StyledImg;
