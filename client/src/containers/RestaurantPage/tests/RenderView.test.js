import React from 'react';
import { shallow } from 'enzyme';

import RenderView from '../RenderView';

describe('<RenderView />', () => {
  let props;

  beforeEach(() => {
    props = {
      location: { search: '' },
      history: { push: jest.fn() },
      match: { params: { id: '1', content: 'informations' } },
      rest: { reviewsConnection: { aggregate: { count: 1 } } },
    };
  });

  it('should not crash', () => {
    shallow(<RenderView {...props} />);
  });
});
