const express = require("express");
const router = express.Router();

const userRoutes = require("./user");
const objectRoutes = require("./object");

// Use your user routes
router.use("/user", userRoutes);
router.use("/object", objectRoutes);

module.exports = router;