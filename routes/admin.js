const express = require("express");
const adminRouter = express();
const adminController = require("../controllers/adminController");
const db = require("../models");
const { passport } = require("../auth");

adminRouter.route("/watch")
  .get(adminController.adminGetWatches)
  .post(adminController.adminCreateWatch);

adminRouter.route("/users")
  .get(adminController.adminGetUsers)
  .post(adminController.adminCreateUser);

adminRouter.route("/users/:id")
  .put(adminController.adminUpdateUser)
  .delete(adminController.adminDeleteUser);

adminRouter.route("/watch/:id")
  .put(adminController.adminUpdateWatch)
  .delete(adminController.adminDeleteWatch);

adminRouter.route("/image/:id")
  .put(adminController.adminRemoveImage);

// function isAdmin(req, res, next) {
//   if (req.user.admin)
//     return next()
//   res.json({ message: "You. Shall not. Pass." });
// }

module.exports = {
  adminRouter
}