import { VISIBILITY_SETIINGS, IS_LOADING_NEWS, ADD_NEWS } from '../constants/index';

export const setVisibilitySettings = ( visibility ) => ({
  type: VISIBILITY_SETIINGS,
  payload: visibility
});

export const isLoadingNews = ( bool ) => ({
  type: IS_LOADING_NEWS,
  payload: bool
});

export const addNews = ( listNews ) => ({
  type: ADD_NEWS,
  payload: listNews
});