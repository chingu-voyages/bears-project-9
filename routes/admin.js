const adminRouter = require("express").Router();
const adminController = require("../controllers/adminController");
const { passport } = require("../auth");

adminRouter.route("/watch")
  .get(passport.authenticate('jwt', { session: false }), isAdmin, adminController.adminGetWatches)
  .post(passport.authenticate('jwt', { session: false }), isAdmin, adminController.adminCreateWatch);

adminRouter.route("/users")
  .get(passport.authenticate('jwt', { session: false }), isAdmin, adminController.adminGetUsers)
  .post(passport.authenticate('jwt', { session: false }), isAdmin, adminController.adminCreateUser);

adminRouter.route("/users/:id")
  .put(passport.authenticate('jwt', { session: false }), isAdmin, adminController.adminUpdateUser)
  .delete(passport.authenticate('jwt', { session: false }), isAdmin, adminController.adminDeleteUser);

adminRouter.route("/watch/:id")
  .put(passport.authenticate('jwt', { session: false }), isAdmin, adminController.adminUpdateWatch)
  .delete(passport.authenticate('jwt', { session: false }), isAdmin, adminController.adminDeleteWatch);

adminRouter.route("/image/:id")
  .put(passport.authenticate('jwt', { session: false }), isAdmin, adminController.adminRemoveImage);

function isAdmin(req, res, next) {
  if (req.user.admin)
    return next()
  res.json({ message: "You. Shall not. Pass." });
}

module.exports = adminRouter;