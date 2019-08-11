import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';

const initialState = {
  visibilitySettings: false,
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
  // const store = await storageApi.init( initialState );
  return await configureStore( initialState );
};

export default initStore;