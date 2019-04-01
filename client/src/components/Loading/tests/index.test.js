import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import Loading from '../index';

describe('<Loading />', () => {
  it('should not crash', () => {
    shallow(<Loading />);
  });

  // it('Expect to have unit tests specified', () => {
  //   const tree = renderer.create(<Error />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
