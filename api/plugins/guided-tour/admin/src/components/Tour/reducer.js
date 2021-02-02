import produce from 'immer';
import { isEmpty, pick } from 'lodash';
import tour from './utils/tour';

const initialState = {
  isOpen: false,
  tour,
};

const reducer = (state, action) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case 'SET_TOUR': {
        const nextTour = pick(tour, action.tourId);

        if (!isEmpty(nextTour)) {
          draftState.tour = nextTour;
        }
        break;
      }
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
