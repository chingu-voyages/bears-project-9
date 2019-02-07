const db = require("../models");
const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});
const { passport } = require("../auth");

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
      res.json(watch);
    } catch (e) {
      console.log(e);
      res.status(422).json({ message: e.message });
    }
  },

  adminGetUsers: async (req, res) => {
    console.log(req.user);
    try {
      const users = await db.User.findAll({});
      res.json(users);
    } catch (e) {
      console.log(e);
      res.status(422).json({ message: e.message });
    }
  },

  adminCreateUser: async (req, res) => {
    console.log(req.user);
    try {
      const user = await db.User.create(req.body);
      res.json(user);
    } catch (e) {
      console.log(e);
      res.status(422).json({ message: e.message });
    }
  },

  adminUpdateUser: async (req, res) => {
    try {
      const user = await db.User.update(req.body, {
        where: { id: req.params.id }
      });
      res.json(user);
    } catch (e) {
      console.log(e);
      res.status(422).json({ message: e.message });
    }
  },

  adminDeleteUser: async (req, res) => {
    try {
      const user = await db.User.destroy({
        where: { id: req.params.id }
      });
      res.json(user);
    } catch (e) {
      console.log(e);
      res.status(422).json({ message: e.message });
    }
  },

  adminUpdateWatch: async (req, res) => {
    try {
      const watch = await db.Watch.update(req.body, {
        where: { id: req.params.id }
      });
      res.send(watch);
    } catch (e) {
      console.log(e);
      res.status(422).json({ message: e.message });
    }
  },

  adminDeleteWatch: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await db.Watch.destroy({ where: { id } });
      res.json(result);
    } catch (e) {
      console.log(e);
      res.status(422).json({ message: e.message });
    }
  },

  adminRemoveImage: async (req, res) => {
    let removal;
    try {
      const result = await cloudinary.v2.uploader.destroy(req.body.publicId, { invalidate: true });
      // if the result comes back 'not found',
      // that means Cloudinary no longer has the image
      // so the URLs should still be removed from the db
      if (result.result === 'ok' || result.result === "not found") {
        removal = await db.Watch.update({
          image: '',
          image400: '',
          image30: '',
          publicId: ''
        }, { where: { id: req.params.id } });
      }
      res.json(removal);
    } catch (e) {
      res.status(422).json({ message: e.message });
    }
  }
}