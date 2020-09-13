import { combineReducers } from 'redux';

import authnReducers from './authentication/duck';

const rootReducer = combineReducers({
  authn: authnReducers,
});

export default rootReducer;
