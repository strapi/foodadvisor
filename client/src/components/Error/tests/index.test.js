import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import Error from '../index';

describe('<Error />', () => {
  it('should not crash', () => {
    shallow(<Error />);
  });

  // it('Should match snapshot', () => {
  //   const tree = renderer.create(<Error />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
