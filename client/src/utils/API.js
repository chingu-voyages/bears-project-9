import axios from 'axios';

const BASE_URL = REACT_APP_BASE_URL || "";

export const API = {
  login: function (userData) {
    return axios.post(`${BASE_URL}/users/login`, userData);
  },

  signup: function (userData) {
    return axios.post(`${BASE_URL}/users`, userData);
  },

  currentuser: function (headers) {
    return axios.get(`${BASE_URL}/currentuser`, { ...headers });
  },

  updateUser: function (id, userData) {
    return axios.put(`${BASE_URL}/users/${id}`, userData)
  },

  getWatches: function () {
    return axios.get(`${BASE_URL}/watches`);
  },

  getWatch: function () {
    return axios.get(`${BASE_URL}/watches/:id`);
  },


  adminGetUsers: function (headers) {
    return axios.get(`${BASE_URL}/admin/users`, { ...headers });
  },

  adminCreateUser: function (userData, headers) {
    return axios.post(`${BASE_URL}/admin/users`, userData, { ...headers })
  },

  adminUpdateUser: function (id, userData, headers) {
    return axios.put(`${BASE_URL}/admin/users/${id}`, userData, { ...headers })
  },

  adminDeleteUser: function (id, headers) {
    return axios.delete(`${BASE_URL}/admin/users/${id}`, { ...headers });
  },

  adminCreateWatch: function (watchData, headers) {
    return axios.post(`${BASE_URL}/admin/watch`, watchData, { ...headers });
  },

  adminUpdateWatch: function (id, watchData, headers) {
    return axios.put(`${BASE_URL}/admin/watch/${id}`, watchData, { ...headers });
  },

  adminDeleteWatch: function (id, headers) {
    return axios.delete(`${BASE_URL}/admin/watch/${id}`, { ...headers });
  },

  adminRemoveImage: function (id, watchData, headers) {
    return axios.put(`${BASE_URL}/admin/image/${id}`, watchData, { ...headers });
  },
}
