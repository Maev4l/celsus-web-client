import { combineReducers } from 'redux';

import authnReducers from './authentication/duck';
import librariesReducers from './libraries/duck';

const rootReducer = combineReducers({ authn: authnReducers, libraries: librariesReducers });

export default rootReducer;
