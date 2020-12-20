import { SET_MAP_REF } from './appTypes';

export const setMapRef = (mapRef) => {
  return {
    type: SET_MAP_REF,
    payload: {
      mapRef,
    },
  };
};
