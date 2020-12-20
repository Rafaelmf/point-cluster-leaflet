import { combineReducers } from 'redux';

import appReducer from './App/appReducer';

const rootReducer = combineReducers({
  counter: appReducer,
});

export default rootReducer;
