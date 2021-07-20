import produce from 'immer';
import { isEmpty, pick } from 'lodash';
import tour from './utils/tour';

const initialState = {
  tour,
  isOpen: false,
  totalLength: 0,
  currentStep: 0,
  actualPlugin: null
};

const reducer = (state, action) =>
  produce(state, draftState => {
    switch (action.type) {
      case 'TOGGLE_IS_OPEN': {
        draftState.isOpen = !state.isOpen;
        draftState.currentStep = state.currentStep;
        break;
      }
      case 'SETUP': {
        draftState.currentStep = action.totalSteps;
        draftState.actualPlugin = action.pluginId;
        draftState.totalLength = action.totalSteps + tour[action.pluginId].steps.length
        break;
      }
      case 'PREV_STEP': {
        draftState.currentStep = state.currentStep > 0 ? state.currentStep - 1 : state.currentStep;
        break;
      }
      case 'NEXT_STEP': {
        draftState.currentStep =
          state.currentStep < state.totalLength - 1 ? state.currentStep + 1 : state.currentStep;
        break;
      }
      default:
        return draftState;
    }
  });

export default reducer;
export { initialState };
