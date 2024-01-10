import { useBooks } from "./hooks/useBooks";
import { Header } from "./components/Header/Header";
import { FiltersNav } from "./components/FiltersNav/FiltersNav";
import { BookItem } from "./components/BookItem/BookItem";
import "./App.css";

function App() {
  const library = useBooks();

  return (
    <>
      <Header />
      <FiltersNav />

      <main className="min-h-screen px-4 lg:px-16 mx-auto max-w-screen-lg">
        <section className="my-8">
          <ul className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {library.map((book) => (
              <BookItem key={book.book.ISBN} book={book.book} />
            ))}
          </ul>
        </section>
      </main>

      <footer className="h-16 bg-slate-900 text-center text-white flex justify-center items-center">
        <span>Gracias por visitarnos ❤️</span>
      </footer>
    </>
  );
}

export default App;
