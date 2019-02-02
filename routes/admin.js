const express = require("express");
const adminRouter = express();
const adminController = require("../controllers/adminController");
const db = require("../models");

adminRouter.route("/watch")
  .get(adminController.adminGetWatches)
  .post(adminController.adminCreateWatch);

adminRouter.route("/watch/:id")
  .get(adminController.adminGetWatch)
  .put(adminController.adminUpdateWatch)
  .delete(adminController.adminDeleteWatch);


// function isAdmin(req, res, next) {
//   console.log(req);
//   if (req.isAuthenticated())
//     return next();
//   res.json({ isAuthenticated: false });
// }

module.exports = {
  adminRouter
}