/** @format */

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
    user: userReducer,
});

const persistConfig = {
    key: 'treemap',
    storage: storage,
};

export default persistReducer(persistConfig, rootReducer);
