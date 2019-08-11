import { VISIBILITY_SETIINGS } from '../constants/index';

export const setVisibilitySettings = ( visibility ) => ({
  type: VISIBILITY_SETIINGS,
  payload: visibility
});