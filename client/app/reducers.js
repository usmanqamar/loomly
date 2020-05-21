import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from 'utils/history';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/hardSet';
import globalReducer from './containers/App/reducer';

const persistConfig = {
  key: 'primary',
  storage,
  blacklist: ['router'],
  stateReconciler: autoMergeLevel2,
};
const globalConfig = {
  key: 'global',
  storage,
  blacklist: ['error'],
  stateReconciler: autoMergeLevel2,
};
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    global: persistReducer(globalConfig, globalReducer),
    ...injectedReducers,
  });

  return persistReducer(persistConfig, rootReducer);
}
