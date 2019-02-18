import React from 'react';
import ReactDOM from 'react-dom';
// import { mount } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import App from '../index';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

