/**
 *
 * StyledHeader
 *
 */

import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const StyledHeader = styled.div`
  .navbar {
    background-color: ${colors.beige};
    padding: 0 ${sizes.header.padding};
    height: ${sizes.header.height.small};
    position: relative;
  }
  .navbar-brand {
    img {
      width: ${sizes.header.logoWidth.small};
      height: auto;
    }
  }

  // Animated hamburger icon
  .navbar-toggler {
    border: 0;
    position: absolute;
    top: ${sizes.header.padding};
    right: 0;
    padding: 0 ${sizes.header.padding};
    .nav-icon {
      width: 20px;
      height: 13px;
      position: relative;
      transform: rotate(0deg);
      transition: 0.15s ease-in-out;
      cursor: pointer;
    }
    .nav-icon span {
      display: block;
      position: absolute;
      width: 100%;
      height: 1px;
      background: ${colors.darkBlue};
      border-radius: 100px;
      opacity: 1;
      right: 0;
      transform: rotate(0deg);
      transition: 0.15s ease-in-out;
    }
    .nav-icon span:nth-child(1) {
      top: 0px;
    }
    .nav-icon span:nth-child(2),
    .nav-icon span:nth-child(3) {
      top: 7px;
    }
    .nav-icon span:nth-child(4) {
      top: 14px;
    }
  }

  .navbar-collapse {
    position: fixed;
    width: 100%;
    top: ${sizes.header.height.small};
    left: 0;
    background-color: ${colors.beige};
    padding: 0 ${sizes.header.padding};
    li {
      a {
        border-bottom: 1px solid ${colors.lightGrey};
      }
      &:last-of-type {
        a {
          border-bottom: 0;
        }
      }
    }
  }

  .navbar-collapse.show + button {
    .nav-icon span:nth-child(1) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
    .nav-icon span:nth-child(2) {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    .nav-icon span:nth-child(3) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
    .nav-icon span:nth-child(4) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
  }

  @media (min-width: ${sizes.tablet}) {
    .navbar-brand,
    .navbar-collapse {
      display: inline-block;
      vertical-align: top;
    }
    .navbar-brand {
      margin-right: ${sizes.margin * 4}px;
      img {
        width: ${sizes.header.logoWidth.large};
      }
    }
    .navbar-collapse {
      position: relative;
      width: inherit;
      top: inherit;
      left: inherit;
      padding: 0;
      border-left: 1px solid ${colors.lightGrey};
      li {
        padding: 0 ${sizes.margin * 4}px;
        display: table-cell;
        a,
        &:last-of-type a {
          border-bottom: 1px solid transparent;
          &.active {
            border-color: ${colors.lightOrange};
          }
        }
      }
    }

    @media (min-width: ${sizes.desktop}) {
      .navbar-brand {
        margin-right: ${sizes.margin * 5.5}px;
      }
      .navbar-collapse {
        li {
          padding: 0 ${sizes.margin * 5.5}px;
        }
      }
    }
  }
`;

export default StyledHeader;
