import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';
import { QUANTITY_NEWS, THEMES } from './config';
import storageAPI from './storageAPI';

const initialState = {
  visibilitySettings: false,
  isLoadingNews: false,
  listNews: [],
  newsAPIError: {
    isShow: false,
    message: '',
  },
  userSettings: {
    isUploadImages: true,
    quantityNews: QUANTITY_NEWS[0],
    activeTabIndex: 2,
    lastQueryForNews: '',
    theme: THEMES[0],
  },
  newsSettings: {
    totalNews: null,
    currentPage: 1,
  }
};

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloadedState => {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware( thunkMiddleware )
    )
  );
};

async function initStore() {
  const store = await storageAPI.init({ userSettings: initialState.userSettings });
  return await configureStore({ ...initialState, userSettings: store.userSettings });
};

export default initStore;