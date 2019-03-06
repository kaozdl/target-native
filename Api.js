import Config from 'react-native-config';
import axios from 'react-native-axios';

const url = Config.API_URL;

async function _processRequest(url, method, data) {
  return new Promise((resolve, reject) => {
    axios({ method, url, data })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  });
};

//Generic rest client
const create = async (model, data) => _processRequest(`${url}${model}/`, 'POST', data);
const retrieve = async (model, id) => _processRequest(`${url}${model}/${id}`, 'GET');
const update = async (model, id, data) => _processRequest(`${url}${model}/${id}`, 'PUT', data);
const destroy = async (model, id) => _processRequest(`${url}${model}/${id}`, 'DELETE');
//rest-auth methods
const login = async (data) => _processRequest(`${url}rest-auth/login/`, 'POST', data);
const logout = async () => _processRequest(`${url}rest-auth/logout/`, 'POST');
const register = async (data) => _processRequest(`${url}rest-auth/registration/`, 'POST', data);

export { create, retrieve, update, destroy, login, logout, register }