import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import reducers from '../redux/index';

// Function to create and configure the Redux store
const reduxStore = () => {
  // Create the store using configureStore from Redux Toolkit
  const store = configureStore({
    reducer: reducers,  // Combine reducers from the 'reducers' file
  });
  
  // Return the configured store
  return store;
};

// Create and export the Redux store
export const store = reduxStore();

// Create and export the Redux persistor for persisting state
export const persistor = persistStore(store);