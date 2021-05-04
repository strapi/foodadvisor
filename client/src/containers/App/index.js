/**
 *
 * App
 *
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RenderView from './RenderView';
import { GET_FOOTER_AND_LOCALES } from '../../queries';
import Query from '../../components/Query';

function App() {
  return (
    <div>
      <Query 
        query={GET_FOOTER_AND_LOCALES} 
        render={props => <RenderView {...props} />} 
      />
    </div>
  );
}

App.defaultProps = {};
App.propTypes = {};

export default App;
