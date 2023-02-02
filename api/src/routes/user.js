const express = require("express");
const router = express.Router();
const { signUp } = require("../middlewares");
const { authController } = require("../controllers");

// Define your user-related routes here
router.get("/", (req, res) => {
  res.send("This is the users route");
});

router.get("/:id", (req, res) => {
  res.send(`This is the user with ID: ${req.params.id}`);
});

router.post(
    "/signup",
    [
      signUp.checkDuplicateUsernameOrEmail,
    ],
    authController.signup
);

router.post("/signin", authController.signin);

router.post("/signout", authController.signout);

module.exports = router;