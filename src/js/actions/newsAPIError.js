import { NEWS_API_ERROR } from '../constants/index';

export const newsApiError = ( errorData ) => ({
  type: NEWS_API_ERROR,
  payload: errorData
});