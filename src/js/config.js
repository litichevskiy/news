export const NEWS_API = 'https://newsapi.org';
export const TOP_HEADLINES = '/v2/top-headlines';
export const EVERYTHING = '/v2/everything';
export const DEFAULT_NEWS_REQUEST = `${NEWS_API}${TOP_HEADLINES}?sources=bbc-news,the-washington-post&pageSize=12`;
export const DEFAULT_TRANSITION_TIME = 300; //ms
export const MAX_TIME_SEARCH_ARTICLES = 28; // days
export const QUANTITY_NEWS = ['30', '60', '100'];
export const MAX_QUANTITY_NEWS = 100;
export const NEWS_FROM = ['publishers', 'countries'];
export const THEMES = ['light', 'dark'];
export const NEWS_CATEGORY = [
  'general',
  'entertainment',
  'sport',
  'business',
  'health',
  'science',
  'technology'
];
export const DAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
export const SHORT_MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
];
export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];