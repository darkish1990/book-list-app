const Book = require("../models/book-schema.js");

const createBook = async (req, res) => {
  if (req.body) {
    try {
      await Book.create(req.body);
      res.send({ message: "book created successfully" });
    } catch (error) {
      res.send({ error: "book was not created", message: error });
    }
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    if (books.length > 0) {
      res.send(books);
    } else {
      res.send([]);
    }
  } catch (error) {
    res.send({ error: "get books failed", message: error });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params?.bookId);
    if (!book) {
      res.send({ error: "book wasnt found" });
    }
    res.send(book);
  } catch (error) {
    res.send({ error: "get book failed", message: error });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params?.bookId);
    if (!book) {
      res.send({ error: "book wasnt found" });
    }
    Object.assign(book, req.body);
    book.save();
    res.send(book);
  } catch (error) {
    res.send({ error: "updating book failed", message: error });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params?.bookId);
    if (!book) {
      res.send({ error: "book wasnt found" });
    }
    book.remove();
    res.send(`${book} was deleted`);
  } catch (error) {
    res.send({ error: "deleting book failed", message: error });
  }
};

module.exports = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
};
