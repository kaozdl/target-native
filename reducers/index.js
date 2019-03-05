import { combineReducers } from 'redux';
//import { reducer as form } from 'redux-form/immutable';
//import { sessionImmutableReducer as session } from 'redux-react-native-session';
import sessionReducer from './session';
import targetsReducer from './targets';

const AppReducer = combineReducers({
  session: sessionReducer,
  targets: targetsReducer,
});

export default AppReducer;