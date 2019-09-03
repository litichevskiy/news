import {
  SET_QUANTITY_NEWS,
  IS_LOAD_IMAGES,
  SET_ACTIVE_TAB_INDEX,
  LAST_QUERY_FOR_NEWS,
  SET_THEME
} from '../constants/index';

export const setIsLoadImages = ( isLoad ) => ({
  type: IS_LOAD_IMAGES,
  payload: isLoad
});

export const setActiveTabIndex = ( index ) => ({
  type: SET_ACTIVE_TAB_INDEX,
  payload: index
});

export const setQuantityNews = ( quantity ) => ({
  type: SET_QUANTITY_NEWS,
  payload: quantity
});

export const lastQueryForNews = ( query ) => ({
  type: LAST_QUERY_FOR_NEWS,
  payload: query
});

export const setTheme = ( theme ) => ({
  type: SET_THEME,
  payload: theme
});