const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  author: String,
  title: String,
  id: mongoose.ObjectId,
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
