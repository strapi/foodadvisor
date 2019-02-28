import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

describe('<Header />', () => {
  it('should not crash', () => {
    shallow(<Header />);
  });

  // it('To match snapshot', () => {
  //   const tree = renderer.create(<Error />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
