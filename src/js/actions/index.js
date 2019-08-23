import {
  VISIBILITY_SETIINGS,
  SET_QUANTITY_NEWS,
  IS_LOAD_IMAGES,
  SET_ACTIVE_TAB_INDEX,
  SELECTED_NEWS_FOR_LOADING
} from '../constants/index';

export const setVisibilitySettings = ( visibility ) => ({
  type: VISIBILITY_SETIINGS,
  payload: visibility
});

export const setQuantityNews = ( quantity ) => ({
  type: SET_QUANTITY_NEWS,
  payload: quantity
});

export const setIsLoadImages = ( isLoad ) => ({
  type: IS_LOAD_IMAGES,
  payload: isLoad
});

export const setActiveTabIndex = ( index ) => ({
  type: SET_ACTIVE_TAB_INDEX,
  payload: index
});

export const selectedNewsForLoading = ( data ) => ({
  type: SELECTED_NEWS_FOR_LOADING,
  payload: data
});