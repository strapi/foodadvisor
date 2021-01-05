/**
 *
 * UniversalPage
 *
 */

import React from 'react';

import { GET_PAGE } from '../../queries';
import Query from '../../components/Query';

import RenderView from './RenderView';

function UniversalPage(props) {

  const renderView = ({ universals }) => {
    return (
      <>
        <RenderView
          universals={universals}
        />
      </>
    );
  };
  return (
    <div >
        <Query
          query={GET_PAGE}
          render={renderView}
          variables={{page: props.match.params.slug}}
        />
    </div>
  );
}


export default UniversalPage;
