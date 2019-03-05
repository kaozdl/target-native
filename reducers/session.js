import * as types from '../actions/actionTypes'

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  userToken: '',
}

export default function sessionApp(state = initialState, action) {
  switch (action.type) {
    case (types.LOGIN_PENDING):
      return { ...state, isLoading: true }
    case (types.LOGIN_SUCCESS):
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        userToken: action.key,
        user: action.user
      }
    case (types.LOGIN_ERROR):
      return { ...state, isLoading: false, isLoggedIn: false }
    case (types.LOGOUT_PENDING):
      return { ...state, isLoading: true }
    case (types.LOGOUT_SUCCESS):
      return { ...state, isLoading: false, isLoggedIn: false, userToken: '' }
    default:
      return state;
  }
}