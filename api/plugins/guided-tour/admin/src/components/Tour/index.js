import React, { memo, useEffect, useCallback, useReducer, useMemo } from 'react';
import reducer, { initialState } from './reducer';
import { useRouteMatch } from 'react-router-dom';
import { Button } from '@buffetjs/core';
import ReactTour from 'reactour';
import { get } from 'lodash';

const Tour = () => {
  const match = useRouteMatch('/plugins/:pluginId');
  const pluginId = get(match, ['params', 'pluginId'], 'admin');

  const [{ isOpen, tour, actualPlugin, currentStep, totalLength }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const handleClick = useCallback(() => {
    dispatch({ type: 'TOGGLE_IS_OPEN', pluginId });
  }, []);

  const steps = useMemo(() => {
    return Object.values(tour).reduce((acc, current) => {
      return [...acc, ...current.steps];
    }, []);
  }, [tour]);

  useEffect(() => {
    let totalSteps = 0;
    const keys = Object.keys(tour);
    const previousPlugins = keys.slice(0, keys.indexOf(pluginId));
    if (previousPlugins.length > 0) {
      previousPlugins.forEach((plugin, i) => {
        totalSteps += tour[plugin].steps.length;
      });
    }
    if (tour[pluginId] && pluginId !== actualPlugin)
      dispatch({ type: 'SETUP', pluginId, totalSteps });
  }, [tour, pluginId, actualPlugin]);

  const handleNextStep = () => {
    if (tour[pluginId] && currentStep === totalLength - 1 && totalLength > 0) {
      return;
    } else if (tour[pluginId]) {
      dispatch({ type: 'NEXT_STEP', length: tour[pluginId].steps.length });
    }
  };

  return (
    <>
      {tour[pluginId] && (
        <Button
          onClick={handleClick}
          color="primary"
          style={{ right: '70px', bottom: '15px', position: 'fixed', height: '37px' }}
        >
          Guided Tour
        </Button>
      )}
      <ReactTour
        isOpen={tour[pluginId] ? isOpen : false}
        onRequestClose={handleClick}
        steps={steps}
        startAt={currentStep}
        goToStep={currentStep}
        nextStep={handleNextStep}
        prevStep={() => dispatch({ type: 'PREV_STEP' })}
        showNavigation={false}
        rounded={2}
      />
    </>
  );
};

export default memo(Tour);
