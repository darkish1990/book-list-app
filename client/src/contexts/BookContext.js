import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const BookContext = createContext();

const defaultBooks = [
  { title: " whatever book 1", author: "william shakespear", id: 1 },
  { title: " whatever book 2", author: "terry prachet", id: 2 },
];

const BookContextProvider = (props) => {
  const [books, setBooks] = useState(defaultBooks);
  const [loading, setLoading] = useState(false);

  const getInitialData = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/");
      if (data && data.length > 0) {
        setBooks([...data]);
        setLoading(false);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    setLoading(true);
    getInitialData();
  }, []);

  const addBook = async (title, author) => {
    try {
      const { data } = await axios.post("http://localhost:4000/", {
        title,
        author,
      });
      if (data) {
        setBooks([...books, data]);
      }
    } catch (error) {}
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook, loading }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
