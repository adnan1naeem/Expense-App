import {persistCombineReducers, persistReducer} from 'redux-persist';

import app from './app';
import AsyncStorage from '@react-native-async-storage/async-storage';

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['app'],
};

export default persistCombineReducers(config, {
  app: persistReducer(config, app)
});
