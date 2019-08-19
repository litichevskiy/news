import {
  VISIBILITY_SETIINGS,
  SET_QUANTITY_NEWS,
  IS_LOAD_IMAGES
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