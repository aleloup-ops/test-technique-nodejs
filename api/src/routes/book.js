const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares");
const { bookController } = require("../controllers");

router.post(
  "/",
  bookController.insertBook
);

router.get(
  "/:id",
  bookController.getAllBooks
);

router.put(
  "/:id",
  bookController.updateBook
);

router.delete(
  "/:id",
  bookController.deleteBook
);

module.exports = router;