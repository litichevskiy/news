import { combineReducers } from 'redux';
import {
  VISIBILITY_SETIINGS,
  SET_QUANTITY_NEWS,
  IS_LOAD_IMAGES,
  SET_ACTIVE_TAB_INDEX,
  ADD_NEWS,
  IS_LOADING_NEWS,
  CLEAR_LIST_NEWS,
  NEWS_API_ERROR,
  NEWS_SETTINGS,
  LAST_QUERY_FOR_NEWS
} from '../constants/index';

const visibilitySettings = ( state = false, { type, payload } ) => {
  switch( type ) {
    case VISIBILITY_SETIINGS:
      return payload;
    default:
      return state;
  }
};

const listNews = ( listNews = [], { type, payload } ) => {
  switch( type ) {
    case ADD_NEWS:
      return listNews.concat( payload );
    case CLEAR_LIST_NEWS:
      return payload;
    default:
      return listNews;
  }
};

const userSettings = ( userSettings = {}, { type, payload } ) => {
  switch( type ) {
    case SET_QUANTITY_NEWS:
      return { ...userSettings, quantityNews: payload };
    case IS_LOAD_IMAGES:
      return { ...userSettings, isUploadImages: payload };
    case SET_ACTIVE_TAB_INDEX:
      return { ...userSettings, activeTabIndex: payload };
    case LAST_QUERY_FOR_NEWS:
      return { ...userSettings, lastQueryForNews: payload };
    default:
      return userSettings;
  }
};

const isLoadingNews = ( isLoadingNews = false, { type, payload } ) => {
  switch( type ) {
    case IS_LOADING_NEWS:
      return payload;
    default:
      return isLoadingNews;
  }
};

const newsAPIError = ( newsAPIError = {}, { type, payload } ) => {
  switch( type ) {
    case NEWS_API_ERROR:
      return { isShow: payload.isShow, message: payload.message };
    default:
      return newsAPIError;
  }
};

const newsSettings = ( newsSettings = {}, { type, payload } ) => {
  switch( type ) {
    case NEWS_SETTINGS:
      return { totalNews: payload.totalNews, currentPage: payload.page };
    default:
      return newsSettings;
  }
};

const rootReducer = combineReducers({
  visibilitySettings,
  userSettings,
  listNews,
  isLoadingNews,
  newsAPIError,
  newsSettings
});

export default rootReducer;