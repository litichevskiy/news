import { combineReducers } from 'redux';
import {
  VISIBILITY_SETIINGS,
  SET_QUANTITY_NEWS,
  IS_LOAD_IMAGES,
  SET_ACTIVE_TAB_INDEX,
  SELECTED_NEWS_FOR_LOADING
} from '../constants/index';

const visibilitySettings = ( state = false, { type, payload }) => {
  switch( type ) {
    case VISIBILITY_SETIINGS:
    return payload;
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
    case SET_ACTIVE_TAB_INDEX:
    return { ...userSettings, activeTabIndex: payload };
    case SELECTED_NEWS_FOR_LOADING:
    const { newsFrom, category, selectedIndex } = payload;
    return {
      ...userSettings,
      newsFrom: newsFrom,
      category: category,
      selectedIndex: selectedIndex
    };
  default:
    return userSettings;
  }
};

const rootReducer = combineReducers({
  visibilitySettings,
  userSettings
});

export default rootReducer;