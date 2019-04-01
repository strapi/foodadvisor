import React from 'react';
import { mount } from 'enzyme';

import StyledHeader from '../StyledHeader';

describe('<StyledHeader />', () => {
  it('should not crash', () => {
    mount(<StyledHeader />);
  });

  // it('To match snapshot', () => {
  //   const tree = renderer.create(<Error />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
