import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import StyledLink from '../StyledLink';

describe('<StyledLink />', () => {
  it('should not crash', () => {
    shallow(<StyledLink />);
  });

  // it('Expect to have unit tests specified', () => {
  //   const tree = renderer.create(<Error />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
