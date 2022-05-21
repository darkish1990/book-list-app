import { Book } from "../models/book-schema";

export const createBook = async (req, res) => {
  if (req.body) {
    try {
      const book = await Book.create(req.body);
      res.send(book);
    } catch (error) {
      res.send({ error: "book was not created", message: error });
    }
  }
};

export const getBooks = async (req, res) => {
  try {
    const result = await Book.find({})
      .sort([["date", -1]])
      .exec(function (err, docs) {
        if (docs) {
          res.send(docs);
        }
      });
    res.send(result);
  } catch (error) {
    res.send({ error: "get books failed", message: error });
  }
};

export const getBook = async (req, res) => {
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

export const updateBook = async (req, res) => {
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

export const deleteBook = async (req, res) => {
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
