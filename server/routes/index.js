import express from "express";
import booksController from "./../controllers/booksController.js";
const router = express.Router();

router
  .route("/")
  .get(booksController.getBook)
  .get(booksController.getBooks)
  .post(booksController.createBook)
  .patch(booksController.updateBook)
  .delete(booksController.deleteBook);

export default router;
