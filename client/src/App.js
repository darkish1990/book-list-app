import React from "react";
import BookContextProvider from "./contexts/BookContext";
import { Home } from "./pages/Home";

function App() {
  return (
    <BookContextProvider>
      <Home />
    </BookContextProvider>
  );
}

export default App;
