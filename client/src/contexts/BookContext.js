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
      const { data } = await axios.get("api/");
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
      await axios.post("api/", {
        title,
        author,
      });
      const { data } = await axios.get("/");
      if (data) {
        setBooks([...data]);
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
