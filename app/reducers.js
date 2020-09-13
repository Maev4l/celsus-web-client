import { combineReducers } from 'redux';

import authnReducers from './authentication/duck';
import notificationsReducers from './shared/notifications/duck';

const rootReducer = combineReducers({
  authn: authnReducers,
  notifications: notificationsReducers,
});

export default rootReducer;
