const getBooks = async () => {
  try {
    const response = await fetch("/books.json");
    const data = await response.json();
    return data.library;
  } catch (error) {
    console.error("Error al obtener los datos", error);
    return [];
  }
};

export { getBooks };
