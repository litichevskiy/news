import { combineReducers } from 'redux';
import { VISIBILITY_SETIINGS, SET_QUANTITY_NEWS, IS_LOAD_IMAGES } from '../constants/index';

const visibilitySettings = ( state = false, action ) => {
  switch( action.type ) {
    case VISIBILITY_SETIINGS:
    return action.payload;
  default:
    return state;
  }
};

const userSettings = ( userSettings = {}, { type, payload }) => {
  switch( type ) {
    case SET_QUANTITY_NEWS:
    return { ...userSettings, quantityNews: payload };
    case IS_LOAD_IMAGES:
    return { ...userSettings, isUploadImages: payload };
  default:
    return userSettings;
  }
};

const rootReducer = combineReducers({
  visibilitySettings,
  userSettings
});

export default rootReducer;