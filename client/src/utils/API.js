import axios from 'axios';

const BASE_URL = "http://localhost:3001";

export const API = {
  login: function (userData) {
    return axios.post(`${BASE_URL}/users/login`, userData);
  },

  signup: function (userData) {
    return axios.post(`${BASE_URL}/users`, userData);
  },

  updateUser: function (id, userData) {
    return axios.put(`${BASE_URL}/users/${id}`, userData)
  }
}