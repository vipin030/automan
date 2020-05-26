import { EMAIL_CHANGED, PASSWORD_CHANGED, userConstants } from '../actions/types';

let token = ''; //localStorage.getItem('token');
let auth = ''; //localStorage.getItem('refresh');

const INITIAL_STATE = {email: '', password: '', user: {token:token, refresh:auth}, error:''}
export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload}
    case PASSWORD_CHANGED:
      return {...state, password: action.payload}
    case 'LOGIN_SUCCESS':
      console.log("Action missing....")
      return {...state, user:{refresh: action.refresh, token: action.token}};
    case userConstants.LOGIN_FAILURE:
      console.log("login failure", action.payload)
      return {...state, error: action.payload};
    default:
      return state;

  }
};
