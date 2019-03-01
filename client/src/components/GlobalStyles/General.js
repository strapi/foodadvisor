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
    }
    p, h1, h2, h3, h4, h5 {
      margin-bottom: 0;
    }
    .container, ul {
      padding: 0;
    }
    ul {
      list-style-type: none;
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
        letter-spacing: 0.8px;
        text-transform: uppercase;
        text-decoration: underline;
      }
    }
    .page-wrapper {
      padding: ${sizes.margin * 2}px;
      @media (min-width: ${sizes.tablet}) {
        padding: ${sizes.margin * 4}px ${sizes.margin * 2}px;
      }
    }
  }
`;

export default General;
