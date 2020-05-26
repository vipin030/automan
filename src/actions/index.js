import { EMAIL_CHANGED, PASSWORD_CHANGED, userConstants } from './types';
import { userService, navigationService } from '../services';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
}

export const loginUser = ({email, password}) => {
  return dispatch => {
     let apiEndpoint = 'token/';
     let payload = {
         username: email,
         password: password
     }
     userService.post(apiEndpoint, payload)
     .then(async (response)=>{
       console.log(response.data)
         if (response.data.access) {
           //localStorage.setItem('token', response.data.access);
           //localStorage.setItem('refresh', response.data.refresh);
           console.log("Login Action....",response.data)
           dispatch(setUserDetails(response.data));
           await navigationService.navigate('Home', {header: {
        left: null,
      }});
           console.log("Login Action",response.data)
         }
     }).catch((error) => {
       console.log("errror...",error)
       dispatch(failure(error.toString()));
     })
   };

   function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
   function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
   function failure(error) { return { type: userConstants.LOGIN_FAILURE, payload:error } }
}

export function setUserDetails(user){
      return{
          type: "LOGIN_SUCCESS",
          refresh: user.refresh,
          token: user.access
      }
}


export const NAVIGATE_TO = 'NAVIGATE_TO';
export const GO_BACK = 'GO_BACK';
export const SET_NAVIGATOR = 'SET_NAVIGATOR';
export const SET_ACTIVE_ROUTE = 'SET_ACTIVE_ROUTE';

export const navigateTo = routeName => ({
  type: NAVIGATE_TO,
  routeName,
});

export const goBack = () => ({
  type: GO_BACK,
});

export const setNavigator = navigator => ({
  type: SET_NAVIGATOR,
  navigator,
});

export const setActiveRoute = activeRouteName => ({
  type: SET_ACTIVE_ROUTE,
  activeRouteName,
});
