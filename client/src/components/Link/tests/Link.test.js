import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import Link from '../index';

describe('<Link />', () => {
  it('should not crash', () => {
    shallow(<Link />);
  });

  // it('Expect to have unit tests specified', () => {
  //   const tree = renderer.create(<Error />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
