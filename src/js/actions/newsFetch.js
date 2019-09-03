import serverAPI from '../serverAPI';
import validateNewsData from '../utils/validateNewsData';
import { MAX_QUANTITY_NEWS } from '../config';
import { CLEAR_LIST_NEWS } from '../constants/index';
import { isLoadingNews, addNews } from './index';
import { newsSettings } from './newsSettings';
import { newsApiError } from './newsAPIError';
import { lastQueryForNews } from './userSettings';

const clearListNews = ( listNews ) => ({
  type: CLEAR_LIST_NEWS,
  payload: listNews
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

    dispatch( isLoadingNews( true ) );
    dispatch( clearListNews( [] ) );
    dispatch( lastQueryForNews( url ) );
    dispatch( newsSettings({ page: 1, totalNews: null }));

    serverAPI.getNews( url )
    .then(({ articles, totalResults }) => {
      let data = getState();

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