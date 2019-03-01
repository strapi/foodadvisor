import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import App from '../index';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
