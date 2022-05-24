import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getInitialData = async () => {
    try {
      const { data } = await axios.get("api/");
      if (data && data.length > 0) {
        setBooks([...data]);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    setLoading(true);
    getInitialData();
    setLoading(false);
  }, []);

  const addBook = async (title, author) => {
    try {
      await axios.post("api/", {
        title,
        author,
      });
      const { data } = await axios.get("api/");
      if (data.length > 0) {
        setBooks([...data]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeBook = async (id) => {
    try {
      await axios.delete(`api/${id}`);
      const { data } = await axios.get("api/");
      if (data) {
        setBooks(() => [...data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook, loading }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
