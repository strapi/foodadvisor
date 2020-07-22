import React from 'react';
import { shallow } from 'enzyme';

/* eslint-disable  */

import RenderView from '../RenderView';

describe('<RenderView />', () => {
  it('should not crash', () => {
    shallow(<RenderView />);
  });
});
