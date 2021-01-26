/**
 *
 * StyledFooter
 *
 */

import styled from 'styled-components';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
import fonts from '../../assets/styles/fonts';

const StyledFooter = styled.div`
  padding: ${sizes.margin * 2.1}px ${sizes.margin * 2}px ${sizes.margin * 1.8}px
    ${sizes.margin * 2}px;
  background-color: ${colors.lightBeige};
  .navbar-brand {
    width: fit-content;
    display: block;
    margin-bottom: ${sizes.margin * 2.2}px;
  }
  .nav-list a,
  .newsletter .newsletter-lbl {
    ${fonts.reg};
    font-size: 12px;
    color: ${colors.darkGrey};
  }
  .nav-list {
    margin-bottom: ${sizes.margin * 1}px;
    a {
      display: inline-block;
      width: 50%;
      line-height: 2.67;
      &:hover {
        text-decoration: none;
        color: ${colors.darkBlue};
        ${fonts.bold};
      }
    }
  }
  .newsletter {
    padding-bottom: ${sizes.margin}px;
    .newsletter-lbl {
      line-height: 2.67;
      margin-bottom: ${sizes.margin * 1.7}px;
    }
    .input-wrapper {
      position: relative;
      button {
        position: absolute;
        top: 0;
        right: 0;
        width: ${sizes.input.height};
        height: ${sizes.input.height};
        background-color: ${colors.darkBlue};
        display: flex;
        border: 0;
        img {
          width: 8px;
          height: 8px;
          margin: auto;
        }
      }
    }
  }
  .love-lbl {
    ${fonts.reg};
    font-size: 12px;
    color: ${colors.darkBlue};
    width: 100%;
    text-align: center;
    padding-top: ${sizes.margin * 2.3}px;
  }

  @media (min-width: ${sizes.tablet}) {
    padding-top: ${sizes.margin * 5.8}px;
    .nav-list {
      margin-bottom: ${sizes.margin * 1}px;
      a {
        margin-bottom: ${sizes.margin * 0.4}px;
      }
    }
    .navbar-nav,
    .newsletter {
      display: inline-block;
      width: 50%;
      vertical-align: top;
    }
  }

  @media (min-width: ${sizes.desktop}) {
    .nav-list {
      a {
        width: calc(100% / 3);
      }
      .main-link {
        float: right;
        clear: both;
      }
    }
    .navbar-nav {
      width: 51.3%;
    }
    .newsletter {
      width: 48.7%;
      padding-left: 8.6%;
    }
  }
`;

export default StyledFooter;
