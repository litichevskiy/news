import serverAPI from '../serverAPI';
import validateNewsData from '../utils/validateNewsData';
import { MAX_QUANTITY_NEWS } from '../config';
import {
  VISIBILITY_SETIINGS,
  SET_QUANTITY_NEWS,
  IS_LOAD_IMAGES,
  SET_ACTIVE_TAB_INDEX,
  ADD_NEWS,
  IS_LOADING_NEWS,
  NEWS_FETCH_ERROR,
  CLEAR_LIST_NEWS,
  NEWS_API_ERROR,
  NEWS_SETTINGS,
  LAST_QUERY_FOR_NEWS
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

export const newsApiError = ( errorData ) => ({
  type: NEWS_API_ERROR,
  payload: errorData
});

const isLoadingNews = ( bool ) => ({
  type: IS_LOADING_NEWS,
  payload: bool
});

const newsFetchError = ( errorMessage ) => ({
  type: NEWS_FETCH_ERROR,
  payload: errorMessage
});

const addNews = ( listNews ) => ({
  type: ADD_NEWS,
  payload: listNews
});

const clearListNews = ( listNews ) => ({
  type: CLEAR_LIST_NEWS,
  payload: listNews
});

const newsSettings = ( data ) => ({
  type: NEWS_SETTINGS,
  payload: data
});

const lastQueryForNews = ( query ) => ({
  type: LAST_QUERY_FOR_NEWS,
  payload: query
});

export const getMoreNews = ( url ) => {
  return async ( dispatch, getState ) => {

    dispatch( isLoadingNews( true ));

    const {
      userSettings: { quantityNews },
      newsSettings: { totalNews, currentPage }
    } = getState();
    const maxNum = ( MAX_QUANTITY_NEWS < totalNews ) ? MAX_QUANTITY_NEWS : totalNews;

    if( ( quantityNews * ( Number( currentPage ) + 1 ) ) > maxNum ) {

      let newQuantity = quantityNews * ( Number( currentPage ) + 1 );
      newQuantity = newQuantity - quantityNews;
      newQuantity = maxNum - newQuantity;

      url = url.replace(`pageSize=${quantityNews}`, `pageSize=${newQuantity}`);
    }

    url = `${url}&page=${currentPage + 1}`;
    dispatch( newsSettings({ page: currentPage + 1, totalNews }) );

    serverAPI.getNews( url )
    .then(({ articles, totalResults }) => {

      dispatch( isLoadingNews( false ));
      articles = validateNewsData( articles );
      dispatch( addNews( articles ));
    })
    .catch(({ message, stack }) => {
      console.error( stack );
      dispatch( isLoadingNews( false ));
      dispatch( newsApiError({ isShow: true, message }));
    });
  };
};

export const getNews = ( url ) => {
  return async ( dispatch, getState ) => {

    dispatch(isLoadingNews( true ));
    dispatch( clearListNews( [] ) );
    dispatch( lastQueryForNews( url ) );

    serverAPI.getNews( url )
    .then(({ articles, totalResults }) => {
      articles = validateNewsData( articles );
      dispatch( isLoadingNews( false ));
      dispatch( addNews( articles ));
      dispatch( newsSettings({ page: 1, totalNews: totalResults }));
    })
    .catch(( { stack, message }) => {
      console.error( stack );
      dispatch( isLoadingNews( false ));
      dispatch( newsApiError({ isShow: true, message }));
    });
  };
};