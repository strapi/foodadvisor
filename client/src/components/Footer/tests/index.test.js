import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../index';

describe('<Footer />', () => {
  it('should not crash', () => {
    shallow(<Footer match={{ params: { columns: [] } }} />);
  });
});
