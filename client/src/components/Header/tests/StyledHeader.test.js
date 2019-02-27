import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import Header from '../index';

describe('<Header />', () => {
  it('should not crash', () => {
    shallow(<Header />);
  });

  // it('Expect to have unit tests specified', () => {
  //   const tree = renderer.create(<Error />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
