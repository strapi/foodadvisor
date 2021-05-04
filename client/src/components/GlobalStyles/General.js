import { createGlobalStyle } from 'styled-components';

import mixins from '../../assets/styles/mixins';
import sizes from '../../assets/styles/sizes';

const General = createGlobalStyle`
  * { ${mixins().bbox} }
  html, body { -webkit-font-smoothing: antialiased; }

  body {
    a, button, button:focus {
      cursor: pointer;
      outline: 0;
      border: none;
      background: none;
    }
    p, h1, h2, h3, h4, h5 {
      margin-bottom: 0;
      line-height: normal;
    }
    span {
      line-height: normal;
    }
    .container, ul {
      padding: 0;
    }
    .container {
      @media (min-width: ${sizes.wide}) {
        max-width: 1240px;
      }
    }
    ul {
      list-style-type: none;
      margin-bottom: 0;
    }
    .link-wrapper {
      a.link {
        display: table;
        float: right;
      }
    }
    a.link {
      cursor: pointer;
      p {
        font-size: 10px;    
        line-height: 22px;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        text-decoration: underline;
      }
    }
    .page-wrapper {
      position: relative;
    }
  }
  .navbar-brand {
    font-size: 0;
    padding: 0;
    img {
      width: ${sizes.header.logoWidth.small};
      height: auto;
    }
    @media (min-width: ${sizes.tablet}) {
      img {
        width: ${sizes.header.logoWidth.large};
      }
    }
  }
`;

export default General;
