import Config from 'react-native-config';
const url = Config.API_URL;

function _processRequest(url, method, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json()
    ).then(response => resolve(response)
    )
      .catch(error => {
        reject({
          message: error.text,
          status: error.status
        })
      });
  })
}

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