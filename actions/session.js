import ApiClient from '../Api';

const loginSuccess = (response) => ({
  type: 'LOGIN_SUCCESS',
  response,
});

const loginLoading = () => ({
  type: 'LOGIN_PENDING',
});

const loginError = (error) => ({
  type: 'LOGIN_ERROR',
  error
});

export const login = (username, password) => async (dispatch) => {
  dispatch(loginLoading());
  Api = new ApiClient();
  try {
    response = await Api.login({ username: username, password: password });
    dispatch(loginSuccess(response));
  }
  catch (error) {
    dispatch(loginError(error));
  }
}

