import React, { useContext } from "react";
import { BookContext } from "../../contexts/BookContext";
import "./Navbar.css";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Book Reading List</h1>
      <p>Currently you have {books.length} books to get thorugh...</p>
    </div>
  );
};

export default Navbar;
