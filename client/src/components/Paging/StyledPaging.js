/**
 *
 * StyledPaging
 *
 */

import { createGlobalStyle } from 'styled-components';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

const StyledPaging = createGlobalStyle`
  ul.pagination {
    display: table;
    margin: 0 auto;
    color: ${colors.darkGrey};
    font-size: 10px;
    .page-item {
      display: inline-block;
      position: relative;
      vertical-align: middle;
      .page-link {
        box-shadow: none;
        border: none;
        ${fonts.reg};
        font-size: 12px;
        background-color: transparent;
        padding: 0 ${sizes.margin * 0.5}px;
        color: ${colors.darkGrey};
        &:hover {
          color: ${colors.darkBlue};
          background-color: transparent;
        }
      }
      &.selected {
        .page-link {
          ${fonts.bold};
          color: ${colors.darkBlue};
        }
      }
      // Left & right arrows
      &:first-of-type, &:last-of-type {
        .page-link {
          width: 10px;
          height: 15px;
        }
      }
      &:first-of-type .page-link:before, &:last-of-type .page-link:after {
        content: '';
        position: absolute;
        top: calc(50% - 2px);
        bottom: 0;
        color: ${colors.black};
        width: 5px;
        height: 5px;
        border-top: 1px solid ${colors.lightOrange};
        border-right: 1px solid ${colors.lightOrange};
        overflow: hidden;
        font-size: 12px;
      }
      &:first-of-type {
        .page-link {
          &:before {
            left: 0;
            transform: rotate(234deg) skew(20deg);
          }
        }
        & + span {
          display: none;
        }
      } 
      &:last-of-type .page-link {
        &:after {
          right: 0;
          transform: rotate(54deg) skew(20deg);
        }
      }
    }
  }
`;

export default StyledPaging;
