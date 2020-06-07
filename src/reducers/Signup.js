import { userConstants } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  password2: '',
  check_textInputChange: false,
  secureTextEntry: true,
  confirm_secureTextEntry: true,
}

export default(state=INITIAL_STATE, action) => {
  switch(action.type) {
    case "TEXT_CHANGED":
      console.log("act",action)
      return {...state, [action.payload.prop]: action.payload.value}
    case userConstants.REGISTER_SUCCESS:
      console.log("now u are in reducer")
      return INITIAL_STATE;
    default:
      return state
  }
}
