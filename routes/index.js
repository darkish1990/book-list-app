const express = require("express");
const {
  createBook,
  getBook,
  getBooks,
  updateBook,
  deleteBook,
} = require("./../controllers/booksController.js");
const router = express.Router();

router.route("/").get(getBooks).post(createBook);
router.route("/:bookId").get(getBook).patch(updateBook).delete(deleteBook);

module.exports = router;
