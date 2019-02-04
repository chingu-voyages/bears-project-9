const db = require("../models.js");
const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

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

  },

  adminGetUsers: async (req, res) => {
    try {
      const users = await db.User.findAll({});
      console.log(users);
      res.json(users);
    } catch (e) {
      console.log(e);
    }
  },

  removeImage: async (req, res) => {
    let removal;
    try {
      const result = await cloudinary.v2.uploader.destroy(req.body.publicId, { invalidate: true });
      // if the result comes back 'not found',
      // that means Cloudinary no longer has the image
      //  and the URLs should also be removed from the db
      if (result.result === 'ok' || result.result === "not found") {
        removal = await db.Watch.update({
          image: '',
          image400: '',
          image30: '',
          publicId: ''
        }, { where: { id: req.params.id }});
      }
      res.json(removal);
    }
    catch (err) {
      res.status(422).json(err);
    }
  }
}