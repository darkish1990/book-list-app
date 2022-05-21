import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  author: String,
  title: String,
  id: mongoose.ObjectId,
});

export const Book = mongoose.model("Book", bookSchema);
