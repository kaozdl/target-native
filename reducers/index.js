import { combineReducers } from 'redux';
//import { reducer as form } from 'redux-form/immutable';
//import { sessionImmutableReducer as session } from 'redux-react-native-session';
import sessionReducer from './session';
const AppReducer = combineReducers({
  session: sessionReducer,
});

export default AppReducer;