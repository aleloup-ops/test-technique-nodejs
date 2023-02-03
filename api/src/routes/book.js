const express = require("express");
const router = express.Router();

// Define your user-related routes here
router.get("/", (req, res) => {
  res.send("This is the books route");
});

router.get("/:id", (req, res) => {
  res.send(`This is the book with ID: ${req.params.id}`);
});

// router.post(
//   "/signup",
//   [
//     signUp.checkDuplicateUsernameOrEmail,
//   ],
//   authController.signup
// );

module.exports = router;