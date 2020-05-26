import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer'
import routes from './routes';

export default combineReducers({
  auth: AuthReducer,
  routes: routes
});
