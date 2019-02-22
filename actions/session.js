import ApiClient from '../Api';
import * as types from './actionTypes';

const loginSuccess = (response) => ({
  type: types.LOGIN_SUCCESS,
  response,
});

const loginLoading = () => ({
  type: types.LOGIN_PENDING,
});

const loginError = (error) => ({
  type: types.LOGIN_ERROR,
  error
});

const logoutLoading = () => ({
  type: types.LOGOUT_PENDING,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

export const logout = () => async (dispatch) => {
  dispatch(logoutLoading());
  setTimeout(() => dispatch(logoutSuccess()), 300);
}

export const login = (username, password) => async (dispatch) => {
  dispatch(loginLoading());
  Api = new ApiClient();
  try {
    response = await Api.login({ username: username, password: password });
    if (response.status === 200)
      dispatch(loginSuccess(response));
    else {
      dispatch(loginError(response));
      alert(`Something went wrong! 
      ${response.status} - ${response._bodyText}`
      );
    }
  }
  catch (error) {
    dispatch(loginError(error));
  }
}

