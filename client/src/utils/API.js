import axios from 'axios';

const BASE_URL = "http://localhost:3001";

export const API = {
  login: function (userData) {
    return axios.post(`${BASE_URL}/users/login`, userData);
  },

  signup: function (userData) {
    return axios.post(`${BASE_URL}/users`, userData);
  },

  currentuser: function (headers) {
    return axios.get(`${BASE_URL}/currentuser`, {...headers});
  },

  updateUser: function (id, userData) {
    return axios.put(`${BASE_URL}/users/${id}`, userData)
  },

  getWatches: function () {
    return axios.get(`${BASE_URL}/watches`);
  },


  adminGetUsers: function () {
    return axios.get(`${BASE_URL}/admin/users`);
  },

  adminCreateUser: function (userData) {
    return axios.post(`${BASE_URL}/admin/users`, userData)
  },

  adminUpdateUser: function (id, userData) {
    return axios.put(`${BASE_URL}/admin/users/${id}`, userData)
  },

  adminDeleteUser: function (id) {
    return axios.delete(`${BASE_URL}/admin/users/${id}`)
  },

  adminCreateWatch: function (watchData) {
    return axios.post(`${BASE_URL}/admin/watch`, watchData);
  },

  adminUpdateWatch: function (id, watchData) {
    return axios.put(`${BASE_URL}/admin/watch/${id}`, watchData);
  },

  adminDeleteWatch: function (id) {
    return axios.delete(`${BASE_URL}/admin/watch/${id}`);
  },

  adminRemoveImage: function (id, watchData) {
    return axios.put(`${BASE_URL}/admin/image/${id}`, watchData)
  },
}
