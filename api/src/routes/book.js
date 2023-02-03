const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares");
const { bookController } = require("../controllers");

// Define your user-related routes here
// router.get("/", (req, res) => {
//   res.send("This is the books route");
// });

router.get(
  "/",
  [
    auth.verifyToken,
  ],
  bookController.getAllBooks
);

router.post(
  "/",
  [
    auth.verifyToken,
  ],
  bookController.insertBook
);

router.get(
  "/:id",
  [
    auth.verifyToken,
  ],
  bookController.getBookById
);

router.put(
  "/:id",
  [
    auth.verifyToken,
  ],
  bookController.updateBook
);

router.delete(
  "/:id",
  [
    auth.verifyToken,
  ],
  bookController.deleteBook
);

module.exports = router;