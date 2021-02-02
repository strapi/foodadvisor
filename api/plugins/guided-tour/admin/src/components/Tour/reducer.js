import produce from 'immer';
import tour from './utils/tour';

const initialState = {
  isOpen: false,
  tour,
};

const reducer = (state, action) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case 'TOGGLE_IS_OPEN': {
        draftState.isOpen = !state.isOpen;
        break;
      }
      default:
        return draftState;
    }
  });

export default reducer;
export { initialState };
