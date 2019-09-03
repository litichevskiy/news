import { NEWS_SETTINGS } from '../constants/index';

export const newsSettings = ( newsSettings = {}, { type, payload } ) => {
  switch( type ) {
    case NEWS_SETTINGS:
      return { totalNews: payload.totalNews, currentPage: payload.page };
    default:
      return newsSettings;
  }
};