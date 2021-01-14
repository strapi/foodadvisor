import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import Footer from '../index';

describe('<Footer />', () => {
  it('should not crash', () => {
    shallow(<Footer match={{ params: { columns: [] } }} />);
  });
});
