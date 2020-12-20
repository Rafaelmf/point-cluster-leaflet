import { SET_MAP_REF } from './appTypes';

const INITIAL_STATE = {
  mapRef: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MAP_REF:
      return {
        ...state,
        mapRef: action.payload.mapRef,
      };

    default:
      return state;
  }
};

export default reducer;
