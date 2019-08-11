import { combineReducers } from 'redux';
import { VISIBILITY_SETIINGS } from '../constants/index';

const visibilitySettings = ( state = false, action ) => {
  switch( action.type ) {
    case VISIBILITY_SETIINGS:
    return action.payload;
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  visibilitySettings
});

export default rootReducer;