import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import UniversalPage from '../index';

describe('<UniversalPage />', () => {
  it('should not crash', () => {
    shallow(<UniversalPage match={{ params: { slug: 'foo' } }} />);
  });
});
