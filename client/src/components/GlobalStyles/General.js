import { createGlobalStyle } from 'styled-components';

import mixins from '../../assets/styles/mixins';

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
        letter-spacing: 0.8px;
        text-transform: uppercase;
        text-decoration: underline;
      }
    }
    .page-wrapper {
      position: relative;
    }
  }
`;

export default General;
