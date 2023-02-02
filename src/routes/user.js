const express = require("express");
const router = express.Router();

// Define your user-related routes here
router.get("/", (req, res) => {
  res.send("This is the users route");
});

router.get("/:id", (req, res) => {
  res.send(`This is the user with ID: ${req.params.id}`);
});

module.exports = router;