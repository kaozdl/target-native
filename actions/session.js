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
  message
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
    dispatch(loginSuccess(response.key));
  } catch (error) {
    const message = `Error: ${error.message}`;
    dispatch(loginError(message));
  }
}

