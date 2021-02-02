import React, { memo, useEffect, useCallback, useReducer, useMemo } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ReactTour from 'reactour';
import { get } from 'lodash';
import { Button } from '@buffetjs/core';
import reducer, { initialState } from './reducer';

const Tour = () => {
  const [{ isOpen, tour }, dispatch] = useReducer(reducer, initialState);
  const match = useRouteMatch('/plugins/:pluginId');
  const adminMatch = useRouteMatch('/:adminSlug');
  const pluginId = get(match, ['params', 'pluginId'], null);
  // TODO check if needed
  const adminEndpoint = get(adminMatch, ['params', 'adminSlug'], null);

  console.log({ adminEndpoint, pluginId });

  useEffect(() => {
    if (!isOpen) {
      dispatch({ type: 'SET_TOUR', tourId: pluginId || 'admin' });
    }
  }, [pluginId, isOpen]);

  const handleClick = useCallback(() => {
    dispatch({ type: 'TOGGLE_IS_OPEN' });
  }, []);

  const steps = useMemo(() => {
    return Object.values(tour).reduce((acc, current) => {
      return [...acc, ...current.steps];
    }, []);
  }, [tour]);

  return (
    <>
      <Button
        onClick={handleClick}
        color="primary"
        style={{ right: '70px', bottom: '15px', position: 'fixed', height: '37px' }}
      >
        Guided Tour
      </Button>
      <ReactTour isOpen={isOpen} onRequestClose={handleClick} steps={steps} />
    </>
  );
};

export default memo(Tour);
