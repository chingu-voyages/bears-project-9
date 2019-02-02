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

  getWatches: function () {
    return axios.get(`${BASE_URL}/watches`);
  },

  updateUser: function (id, userData) {
    return axios.put(`${BASE_URL}/users/${id}`, userData)
  },

  createWatch: function (watchData) {
    return axios.post(`${BASE_URL}/admin/watch`, watchData);
  },

  updateWatch: function (id, watchData) {
    return axios.put(`${BASE_URL}/admin/watch/${id}`, watchData);
  },

  deleteWatch: function (id) {
    return axios.delete(`${BASE_URL}/admin/watch/${id}`);
  }
}
