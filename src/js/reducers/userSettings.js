import {
  SET_QUANTITY_NEWS,
  IS_LOAD_IMAGES,
  SET_ACTIVE_TAB_INDEX,
  LAST_QUERY_FOR_NEWS,
  SET_THEME
} from '../constants/index';

export const userSettings = ( userSettings = {}, { type, payload } ) => {
  switch( type ) {
    case SET_QUANTITY_NEWS:
      return { ...userSettings, quantityNews: payload };
    case IS_LOAD_IMAGES:
      return { ...userSettings, isUploadImages: payload };
    case SET_ACTIVE_TAB_INDEX:
      return { ...userSettings, activeTabIndex: payload };
    case LAST_QUERY_FOR_NEWS:
      return { ...userSettings, lastQueryForNews: payload };
    case SET_THEME:
      return { ...userSettings, theme: payload };
    default:
      return userSettings;
  }
};