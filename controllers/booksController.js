const Book = require("../models/book-schema.js");

const createBook = async (req, res) => {
  if (req.body) {
    try {
      await Book.create(req.body);
      res.json({ message: "book created successfully" });
    } catch (error) {
      res.json({ error: "book was not created", message: error });
    }
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    if (books) {
      res.json(books);
    } else {
      res.json({ error: "books was not found" });
    }
  } catch (error) {
    res.json({ error: "get books failed", message: error });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params?.bookId);
    if (!book) {
      res.json({ error: "book wasnt found" });
    }
    res.json(book);
  } catch (error) {
    res.json({ error: "get book failed", message: error });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params?.bookId);
    if (!book) {
      res.json({ error: "book wasnt found" });
    }
    Object.assign(book, req.body);
    book.save();
    res.json(book);
  } catch (error) {
    res.json({ error: "updating book failed", message: error });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params?.bookId);
    if (!book) {
      res.json({ error: "book wasnt found" });
    }
    book.remove();
    res.json(`${book} was deleted`);
  } catch (error) {
    res.json({ error: "deleting book failed", message: error });
  }
};

module.exports = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
};
