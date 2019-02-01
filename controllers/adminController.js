const db = require("../models");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await db.User.findAll({});
      res.json(users);
    } catch (e) {
      console.error(e);
      res.status(422).json({ message: e.message });
    }
  },

  createNewUser: function (req, res) {

  },

  getSingleUser: function (req, res) {

  },

  updateUser: function (req, res) {

  },

  deleteUser: function (req, res) {

  },

  getAllWatches: function (req, res) {

  },

  createNewWatch: function (req, res) {

  },

  getSingleWatch: function (req, res) {

  },

  updateWatch: function (req, res) {

  },

  deleteWatch: function (req, res) {

  }
}