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
    width: ${sizes.header.logoWidth.small};
    img {
      width: 100%;
      height: auto;
    }
  }

  // Hamburger icon
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
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.5s ease-in-out;
      -moz-transition: 0.5s ease-in-out;
      -o-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
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
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
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

  @media (min-width: ${sizes.tablet}) {
    .navbar-brand,
    .navbar-collapse {
      display: inline-block;
      vertical-align: top;
    }
    .navbar-brand {
      width: ${sizes.header.logoWidth.large};
    }
    .navbar-collapse {
      position: relative;
      width: inherit;
      top: inherit;
      left: inherit;
    }
  }
`;

export default StyledHeader;
