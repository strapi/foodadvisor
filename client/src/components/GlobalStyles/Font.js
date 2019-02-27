import { createGlobalStyle } from 'styled-components';

import OpenSansLight from '../../assets/fonts/Open_Sans/OpenSans-Light.ttf';
import OpenSansRegular from '../../assets/fonts/Open_Sans/OpenSans-Regular.ttf';
import OpenSansBold from '../../assets/fonts/Open_Sans/OpenSans-Bold.ttf';

const Font = createGlobalStyle`

@font-face {
  font-family: 'Open Sans';
  src: url(${OpenSansLight}) format("ttf");
  font-weight: light;
  font-style: normal;
}

@font-face {
  font-family: 'Open Sans';
  src: url(${OpenSansRegular}) format("ttf");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Open Sans';
  src: url(${OpenSansBold}) format("ttf");
  font-weight: bold;
  font-style: normal;
}
`;

export default Font;
