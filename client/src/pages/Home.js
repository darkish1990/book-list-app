import React, { useContext } from "react";
import NewBookForm from "../components/BookForm/BookForm";
import BookList from "../components/BookList/BookList";
import Navbar from "../components/Navbar/Navbar";
import { BookContext } from "../contexts/BookContext";
export const Home = () => {
  const { loading } = useContext(BookContext);
  if (loading) {
    return <div>Loading ...</div>;
  }
  return (
    <>
      <Navbar />
      <BookList />
      <NewBookForm />
    </>
  );
};
