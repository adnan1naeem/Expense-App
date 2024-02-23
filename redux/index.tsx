import {persistCombineReducers, persistReducer} from 'redux-persist';

import app from './app';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Configuration object for redux-persist
const config = {
  key: 'root',                 // Key for storing the data in AsyncStorage
  storage: AsyncStorage,       // AsyncStorage as the storage engine
  blacklist: ['app'],          // Blacklist certain reducers from being persisted
};

// Combine reducers using redux-persist functions
export default persistCombineReducers(config, {
  app: persistReducer(config, app) // Combine 'app' reducer with persistence
});
