const router = require("express").Router();
const playerRoutes = require("./player");

// user routes
router.use("/player", playerRoutes);

module.exports = router;
