const path = require("path");
const router = require("express").Router();
const watchRoutes = require("./watches");
const userRoutes = require("./users");
const adminRoutes = require("./admin");

// backend Routes
router.use("/admin", adminRoutes);
router.use("/watches", watchRoutes);
router.use("/users", userRoutes);

// If no defined routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;