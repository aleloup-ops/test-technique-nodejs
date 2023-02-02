const express = require("express");
const router = express.Router();

const userRoutes = require("./user");
const objectRoutes = require("./object");

router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

// Use your user routes
router.use("/user", userRoutes);
router.use("/object", objectRoutes);
module.exports = router;