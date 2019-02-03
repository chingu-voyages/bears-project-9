const express = require("express");
const adminRouter = express();
const adminController = require("../controllers/adminController");
const db = require("../models");

adminRouter.route("/watch")
  .get(adminController.adminGetWatches)
  .post(adminController.adminCreateWatch);

adminRouter.route("/watch/:id")
  .put(adminController.adminUpdateWatch)
  .delete(adminController.adminDeleteWatch);

adminRouter.route("/image/:id")
  .put(adminController.removeImage);


// function isAdmin(req, res, next) {
//   console.log(req);
//   if (req.isAuthenticated())
//     return next();
//   res.json({ isAuthenticated: false });
// }

module.exports = {
  adminRouter
}