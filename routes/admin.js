const adminRouter = require("express").Router();
const adminController = require("../controllers/adminController");

adminRouter.route("/")
  .get(adminController.getAllWatches)
  .post(adminController.createNewWatch);

adminRouter.route("/:id")
  .get(adminController.getSingleWatch)
  .put(adminController.updateWatch)
  .delete(adminController.deleteWatch);

// function isAdmin(req, res, next) {
//   if (req.isAuthenticated())
//     return next();
//   res.json({ isAuthenticated: false });
// }

module.exports = {
  adminRouter
}