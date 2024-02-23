import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import reducers from '../redux/index';

const reduxStore = () => {

  const store = configureStore({
    reducer: reducers,
  });
  return store;
};

export const store = reduxStore();
export const persistor = persistStore(store);
