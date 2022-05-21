import express from "express";
import {
  createBook,
  getBook,
  getBooks,
  updateBook,
  deleteBook,
} from "./../controllers/booksController.js";
const router = express.Router();

router.route("/").get(getBooks).post(createBook);
router.route("/:bookId").get(getBook).patch(updateBook).delete(deleteBook);

export default router;
