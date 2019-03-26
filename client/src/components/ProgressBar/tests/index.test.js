import React from 'react';
import { mount } from 'enzyme';

import ProgressBar from '../index';

describe('<ProgressBar />', () => {
  it('should not crash', () => {
    mount(<ProgressBar />);
  });
});
