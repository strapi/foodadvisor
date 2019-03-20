/**
 *
 * Grid
 *
 */

import styled from 'styled-components';
import sizes from '../../assets/styles/sizes';

const Grid = styled.ul`
  li.column {
    @media (min-width: ${sizes.tablet}) {
      display: inline-block;
      vertical-align: top;
      width: 50%;
      padding-bottom: ${sizes.margin * 3}px;
      &:nth-child(even) {
        padding-left: ${sizes.margin * 1.5}px;
      }
      &:nth-child(odd) {
        padding-right: ${sizes.margin * 1.5}px;
      }
    }
    @media (min-width: ${sizes.desktop}) {
      width: calc(100% / 3);
      &:nth-child(even) {
        padding-left: inherit;
      }
      &:nth-child(odd) {
        padding-right: inherit;
      }
      :nth-child(3n + 1) {
        padding-left: ${sizes.margin * 3.3}px;
      }
      :nth-child(3n + 2) {
        padding-left: ${sizes.margin * 3.3}px;
      }
      :nth-child(3n + 3) {
        padding-left: ${sizes.margin * 3.3}px;
      }
    }
  }
`;

export default Grid;
