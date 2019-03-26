import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import Informations from '../index';

describe('<Informations />', () => {
  it('should not crash', () => {
    shallow(<Informations />);
  });
});
