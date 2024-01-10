import PropTypes from "prop-types";

export function BookItem({ book }) {
  return (
    <li key={book.ISBN} className="relative">
      <img
        className="w-full object-cover rounded-md bg-slate-200 aspect-[9/14]"
        src={book.cover}
        alt={book.title}
      />
      <h3>{book.title}</h3>
      <h4>{book.author.name}</h4>
      <span>{book.genre}</span>
      <button className="absolute right-2 top-2 bg-white p-1 rounded hover:bg-slate-200 transition-all duration-200">
        Agregar a mi lista
      </button>
    </li>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    ISBN: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};
