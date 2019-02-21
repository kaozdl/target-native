
const initialState = {
  connected: false,
  isLoading: false,
  isLoggedIn: false,
}

export default function targetApp(state = initialState, action) {
  switch (action.type) {
    case ('LOGIN_PENDING'):
      return { ...state, isLoading: true }
    case ('LOGIN_SUCCESS'):
      return { ...state, isLoading: false, isLoggedIn: true }
    case ('LOGIN_ERROR'):
      return { ...state, isLoading: false, isLoggedIn: false }
    default:
      return state;
  }
}