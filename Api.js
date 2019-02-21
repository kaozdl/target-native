import Config from 'react-native-config';
export default class ApiClient {
  constructor() {
    this.url = Config.API_URL;
  }
  //Generic rest client
  async create(model, data) {
    try {
      let response = await fetch(`${this.url}${model}/`, {
        method: 'POST',
        headers: {
          Accept: 'appplication/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
      );
      return response;
    }
    catch (error) {
      return error;
    }
  }
  async retrieve(model, id) {
    try {
      let response = await fetch(`${this.url}${model}/${id}`).then(data);
      return response;
    }
    catch (error) {
      return error;
    }
  }
  async update(model, id, data) {
    try {
      let response = await fetch(`${this.url}${model}/${id}`, {
        method: 'PUT',
        headers: {
          Accept: 'appplication/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
      );
      return response;
    }
    catch (error) {
      return error;
    }
  }
  async delete(model, id) {
    try {
      let response = await fetch(`${this.url}${model}/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'appplication/json',
          'Content-Type': 'application/json',
        },
      });
      return response;
    }
    catch (error) {
      return error;
    }
  }
  //rest-auth methods
  async login(data) {
    try {
      let response = await fetch(`${this.url}rest-auth/login/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response;
    }
    catch (error) {
      return error;
    }
  }
  async logout() {
    try {
      let response = await fetch(`${this.url}rest-auth/logout/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response;
    }
    catch (error) {
      return error;
    }
  }
  async register(user) {
    try {
      let response = await fetch(`${this.url}rest-auth/registration/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response;
    }
    catch (error) {
      return error;
    }
  }
}