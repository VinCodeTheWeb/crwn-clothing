import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);

export default { store, persistor };
