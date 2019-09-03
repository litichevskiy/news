import { combineReducers } from 'redux';
import {
  VISIBILITY_SETIINGS,
  ADD_NEWS,
  CLEAR_LIST_NEWS,
  IS_LOADING_NEWS
} from '../constants/index';
import { newsSettings } from './newsSettings';
import { newsAPIError } from './newsAPIError';
import { userSettings } from './userSettings';

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

const isLoadingNews = ( isLoadingNews = false, { type, payload } ) => {
  switch( type ) {
    case IS_LOADING_NEWS:
      return payload;
    default:
      return isLoadingNews;
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