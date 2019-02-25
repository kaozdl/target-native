import { login as apiLogin } from '../Api';
import * as types from './actionTypes';

const loginSuccess = (key) => ({
  type: types.LOGIN_SUCCESS,
  key,
});

const loginLoading = () => ({
  type: types.LOGIN_PENDING,
});

const loginError = () => ({
  type: types.LOGIN_ERROR,
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
  try {
    response = await apiLogin({ username, password });
    console.log(response);
    dispatch(loginSuccess(response.key));
  } catch (error) {
    const message = (error.status >= 500) ?
      `Oops, something went wrong \n Error: ${error.status}` :
      `Error: ${error.status} \n ${error.message}`
    alert(message);
    dispatch(loginError());
  }
}

