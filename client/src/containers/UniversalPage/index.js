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

  const renderView = ({ universalBySlug }) => {
    return (
      <>
        <RenderView
          universals={universalBySlug}
        />
      </>
    );
  };
  return (
    <div >
        <Query
          query={GET_PAGE}
          render={renderView}
          variables={{slug: props.match.params.slug}}
        />
    </div>
  );
}


export default UniversalPage;
