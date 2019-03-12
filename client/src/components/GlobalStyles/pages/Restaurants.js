import { createGlobalStyle } from 'styled-components';

import sizes from '../../../assets/styles/sizes';

const Restaurants = createGlobalStyle`
  #restaurants-page {
    padding: ${sizes.margin * 2}px;
    .container {
      position: relative;
    }
    ul li.column {
      padding-top: ${sizes.margin * 3}px;
    }
    @media (min-width: ${sizes.tablet}) {
      padding: ${sizes.margin * 4}px ${sizes.margin * 2}px;
    }
  }
`;

export default Restaurants;
