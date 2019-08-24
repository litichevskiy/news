import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';
import { QUANTITY_NEWS, NEWS_CATEGORY, NEWS_FROM } from './config';
import storageAPI from './storageAPI';

const initialState = {
  visibilitySettings: true,
  // isNewsApiError: false,
  // newsApiErrorMessage: null,
  userSettings: {
    isUploadImages: true,
    quantityNews: QUANTITY_NEWS[0],
    activeTabIndex: 1,

    newsFrom: NEWS_FROM[0],
    category: NEWS_CATEGORY[0],
    selectedIndex: 0,
  }
};

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloadedState => {
  return createStore( rootReducer, preloadedState, composeEnhancers() );
};

async function initStore() {
  const store = await storageAPI.init({ userSettings: initialState.userSettings });
  return await configureStore({...initialState, userSettings: store.userSettings});
};

export default initStore;