import { AsyncStorage } from 'react-native';
import { login as apiLogin, logout as apiLogout } from '../Api';
import * as types from './actionTypes';

const loginSuccess = (key, user) => ({
  type: types.LOGIN_SUCCESS,
  key,
  user,
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
  try {
    apiLogout();
    AsyncStorage.setItem('sessionkey', '');
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(loginError());
  }
}

export const login = (username, password) => async (dispatch) => {
  dispatch(loginLoading());
  try {
    let response = await apiLogin({ username, password });
    dispatch(loginSuccess(response.key, response.user));
    AsyncStorage.setItem('sessionkey', response.token);
  } catch (error) {
    const message = `Error: ${error.message}`;
    dispatch(loginError(message));
  }
}

