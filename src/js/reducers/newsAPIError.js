import { NEWS_API_ERROR } from '../constants/index';

export const newsAPIError = ( newsAPIError = {}, { type, payload } ) => {
  switch( type ) {
    case NEWS_API_ERROR:
      return { isShow: payload.isShow, message: payload.message };
    default:
      return newsAPIError;
  }
};