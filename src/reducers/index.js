import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer'
import routes from './routes';
import Signup from './Signup';

export default combineReducers({
  auth: AuthReducer,
  routes: routes,
  signup: Signup
});
