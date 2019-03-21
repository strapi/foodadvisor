import { createGlobalStyle } from 'styled-components';

const Font = createGlobalStyle`

@font-face {
  font-family: 'Open Sans';
  src: url('https://fonts.googleapis.com/css?family=Open+Sans:300')
  font-weight: light;
  font-style: normal;
}

@font-face {
  font-family: 'Open Sans';
  src: url('https://fonts.googleapis.com/css?family=Open+Sans:400')
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Open Sans';
  src: url('https://fonts.googleapis.com/css?family=Open+Sans:700')
  font-weight: bold;
  font-style: normal;
}
`;

export default Font;
