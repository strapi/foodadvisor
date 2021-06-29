import styled from 'styled-components';

import EyeIcon from './eye.svg';

const StyledExternalLink = styled.a`
  display: block;
  color: #333740;
  width: 100%;
  text-decoration: none;
  span,
  i,
  svg {
    color: #333740;
    width: 13px;
    height: 12px;
    margin-right: 10px;
    vertical-align: 0;
  }
  span {
    font-size: 13px;
  }
  i {
    display: inline-block;
    background-image: url(${EyeIcon});
    background-size: contain;
  }
  &:hover {
    text-decoration: none;
    span,
    i,
    svg {
      color: #007eff;
    }
  }
`;

export default StyledExternalLink;
