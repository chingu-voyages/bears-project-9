const db = require("../models.js");

module.exports = {
  adminGetWatches: async (req, res) => {
    try {
      const watches = await db.Watch.findAll({});
      res.json(watches);
    } catch (e) {
      console.error(e);
      res.status(422).json({ message: e.message });
    }
  },

  adminCreateWatch: async (req, res) => {
    try {
      const watch = await db.Watch.create(req.body);
      console.log(watch);
      res.json(watch);
    } catch (e) {
      console.log(e);
    }
  },

  adminGetWatch: async (req, res) => {

  },

  adminUpdateWatch: async (req, res) => {
    console.log(req.body);
    try {
      const watch = await db.Watch.update(req.body, {
        where: { id: req.params.id }
      })
      console.log(watch);
      res.send(watch);
    } catch (e) {
      console.log(e);
    }

  },

  adminDeleteWatch: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await db.Watch.destroy({ where: { id } })
      console.log(result);
      res.json(result);
    } catch (e) {
      console.log(e);
    }

  }
}