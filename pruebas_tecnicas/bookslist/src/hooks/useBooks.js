import { useState, useEffect } from "react";
import { getBooks } from "../js/DataService";

export function useBooks() {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const data = await getBooks();
      setLibrary(data);
    };

    loadBooks();
  }, []);

  console.log(library);

  return library;
}
