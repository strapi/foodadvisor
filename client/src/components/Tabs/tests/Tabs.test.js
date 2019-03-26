import React from 'react';
import { shallow } from 'enzyme';

import Tabs from '../index';

describe('<Tabs />', () => {
  it('should not crash', () => {
    shallow(<Tabs />);
  });
});
