import axios from 'axios';

// const BASE_URL = "http://localhost:3001";

export const API = {
  login: function (userData) {
    return axios.post(`/users/login`, userData);
  },

  signup: function (userData) {
    return axios.post(`/users`, userData);
  },

  currentuser: function (headers) {
    return axios.get(`/currentuser`, { ...headers });
  },

  updateUser: function (id, userData) {
    return axios.put(`/users/${id}`, userData)
  },

  getWatches: function () {
    return axios.get(`/watches`);
  },

  getWatch: function () {
    return axios.get(`/watches/:id`);
  },


  adminGetUsers: function (headers) {
    return axios.get(`/admin/users`, { ...headers });
  },

  adminCreateUser: function (userData, headers) {
    return axios.post(`/admin/users`, userData, { ...headers })
  },

  adminUpdateUser: function (id, userData, headers) {
    return axios.put(`/admin/users/${id}`, userData, { ...headers })
  },

  adminDeleteUser: function (id, headers) {
    return axios.delete(`/admin/users/${id}`, { ...headers });
  },

  adminCreateWatch: function (watchData, headers) {
    return axios.post(`/admin/watch`, watchData, { ...headers });
  },

  adminUpdateWatch: function (id, watchData, headers) {
    return axios.put(`/admin/watch/${id}`, watchData, { ...headers });
  },

  adminDeleteWatch: function (id, headers) {
    return axios.delete(`/admin/watch/${id}`, { ...headers });
  },

  adminRemoveImage: function (id, watchData, headers) {
    return axios.put(`/admin/image/${id}`, watchData, { ...headers });
  },
}
