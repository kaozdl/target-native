import * as types from '../actions/actionTypes'

const initialState = {
  connected: false,
  isLoading: false,
  isLoggedIn: false,
}

export default function targetApp(state = initialState, action) {
  switch (action.type) {
    case (types.LOGIN_PENDING):
      return { ...state, isLoading: true }
    case (types.LOGIN_SUCCESS):
      return { ...state, isLoading: false, isLoggedIn: true }
    case (types.LOGIN_ERROR):
      return { ...state, isLoading: false, isLoggedIn: false }
    default:
      return state;
  }
}