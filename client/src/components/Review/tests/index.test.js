import React from 'react';
import { mount } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import Review, { Title } from '../index';

describe('<Review />', () => {
  it('it should not crash', () => {
    mount(<Review author={{ username: '' }} />);
  });
});

describe('<Title />', () => {
  it('should not crash', () => {
    mount(<Title />);
  });
});
