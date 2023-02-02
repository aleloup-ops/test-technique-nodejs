const express = require("express");
const router = express.Router();

// Define your user-related routes here
router.get("/", (req, res) => {
  res.send("This is the objects route");
});

router.get("/:id", (req, res) => {
  res.send(`This is the object with ID: ${req.params.id}`);
});

module.exports = router;